import Head from 'next/head'
import React from 'react'
import SingleRoomPageBanner from '../../components/pageBanners/SingleRoomPageBanner'
import DescriptionRoomBlock from '../../components/shared/DescriptionRoomBlock'
import RoomPhotosSlider from '../../components/sliders/RoomPhotosSlider'
import {otherRoomsSlides} from '../../data/shared-rooms-data'
import OtherRoomsSlider from '../../components/sliders/OtherRoomsSlider'
import {roomsData} from '../../data/rooms-data'
import PropTypes from 'prop-types'

export default function SingleRoomPage({
                                           title,
                                           subtitle,
                                           bannerImg,
                                           bannerImgWebp,
                                           description,
                                           photos,
                                           features,
                                           link
                                       }) {
    return (<>
            <Head>
                <title>{title} – Rinn Rise – Анапа, Джемете</title>
            </Head>
            <main>
                <SingleRoomPageBanner
                    bannerImg={bannerImg}
                    bannerImgWebp={bannerImgWebp}
                    title={title}
                    subtitle={subtitle}/>
                <section className="section first">
                    <DescriptionRoomBlock
                        title="Описание номера"
                        icons={features}
                        link={link}
                        description={description}/>
                </section>
                <section className="section">
                    <RoomPhotosSlider slides={photos} title="Фотографии номера"/>
                </section>
                <section className="section last">
                    <OtherRoomsSlider slides={otherRoomsSlides} title={'Другие номера'} type={'room'}/>
                </section>
            </main>
        </>
    )
}

SingleRoomPage.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    bannerImg: PropTypes.string.isRequired,
    bannerImgWebp: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    photos: PropTypes.arrayOf(PropTypes.object).isRequired,
    features: PropTypes.arrayOf(PropTypes.object).isRequired,
    link: PropTypes.string,
}

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: {
                    room: 'standard'
                }
            },
            {
                params: {
                    room: 'superior'
                }
            },
            {
                params: {
                    room: 'superior-extra'
                }
            },
            {
                params: {
                    room: '1-room-lux'
                }
            },
            {
                params: {
                    room: '2-rooms-lux'
                }
            },
            {
                params: {
                    room: '3-rooms-lux'
                }
            }
        ],
        fallback: false
    }
}

export async function getStaticProps({params}) {
    const room = params.room
    const props = roomsData[room]
    return {
        props
    }
}
