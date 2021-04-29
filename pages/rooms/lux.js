import Head from 'next/head'
import React from 'react'
import SingleRoomPageBanner from '../../components/pageBanners/SingleRoomPageBanner'
import DescriptionRoomBlock from '../../components/shared/DescriptionRoomBlock'
import RoomPhotosSlider from '../../components/sliders/RoomPhotosSlider'
import {roomPhotos, descriptionRooms, otherRoomsSlides} from '../../data/rooms-data'
import OtherRoomsSlider from '../../components/sliders/OtherRoomsSlider'

export default function SingleRoomPage() {
    return (<>
            <Head>
                <title>Rinn Rise – Номер категории Люкс – Анапа, Джемете</title>
            </Head>
            <main>
                <SingleRoomPageBanner/>
                <section className="section first">
                    <DescriptionRoomBlock title="Описание номера" icons={descriptionRooms}/>
                </section>
                <section className="section">
                    <RoomPhotosSlider slides={roomPhotos.standard} title="Фотографии номера"/>
                </section>
                <section className="section last">
                    <OtherRoomsSlider slides={otherRoomsSlides} title={'Другие номера'} type={'room'}/>
                </section>
            </main>
        </>
    )
}
