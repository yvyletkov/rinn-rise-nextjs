import Head from 'next/head'
import React from 'react'
import SingleRoomPageBanner from '../../components/pageBanners/SingleRoomPageBanner'
import DescriptionRoomBlock from '../../components/shared/DescriptionRoomBlock'
import RoomPhotosSlider from '../../components/sliders/RoomPhotosSlider'
import {roomPhotos, descriptionRooms, otherRoomsSlides} from '../../data/shared-rooms-data'
import OtherRoomsSlider from '../../components/sliders/OtherRoomsSlider'
import {roomsData} from '../../data/rooms-data'

export default function SingleRoomPage(props) {
    console.log(props)
    return (<>
            <Head>
                <title>Rinn Rise – Номер категории Люкс – Анапа, Джемете</title>
            </Head>
            {/*<main>*/}
            {/*    <SingleRoomPageBanner/>*/}
            {/*    <section className="section first">*/}
            {/*        <DescriptionRoomBlock title="Описание номера" icons={descriptionRooms}/>*/}
            {/*    </section>*/}
            {/*    <section className="section">*/}
            {/*        <RoomPhotosSlider slides={roomPhotos.standard} title="Фотографии номера"/>*/}
            {/*    </section>*/}
            {/*    <section className="section last">*/}
            {/*        <OtherRoomsSlider slides={otherRoomsSlides} title={'Другие номера'} type={'room'}/>*/}
            {/*    </section>*/}
            {/*</main>*/}
        </>
    )
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
              room: 'lux-1'
            }
          }
        ],
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const room = params.room

    const props = roomsData[room]
    return {
        props: {
            ...props
        }
    }
}
