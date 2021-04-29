import Head from 'next/head'
import React from 'react'
import SingleRoomPageBanner from '../../components/pageBanners/SingleRoomPageBanner'
import DescriptionRoomBlock from '../../components/shared/DescriptionRoomBlock'
import {icons, otherRoomsSlides} from '../../data/room-data';
import RoomPhotosSlider from '../../components/sliders/RoomPhotosSlider';
import {roomPhotos} from '../../data/rooms-data';

export default function SingleRoomPage() {
    return (<>
            <Head>
                <title>Rinn Rise – Номер категории Люкс – Анапа, Джемете</title>
            </Head>
            <main>
                <SingleRoomPageBanner/>
                <section className="section first">
                    <DescriptionRoomBlock title="Описание номера" icons={icons}/>
                </section>
                <section className="section">
                    <RoomPhotosSlider slides={roomPhotos.standard} title='Фотографии номера'/>
                </section>
            </main>
        </>
    )
}
