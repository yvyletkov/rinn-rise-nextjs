import Head from 'next/head'
import React from 'react'
import SingleRoomPageBanner from '../../components/pageBanners/SingleRoomPageBanner'
import DescriptionRoomBlock from '../../components/shared/DescriptionRoomBlock'
import RoomPhotosSlider from '../../components/sliders/RoomPhotosSlider';
import {roomPhotos} from '../../data/rooms-data';

const icons = [
    {img: '/images/rooms/area.svg', text: 'Площадь<br>50м&sup2;'},
    {img: '/images/rooms/capacity.svg', text: '2 человка<br>1 доп. место'},
    {img: '/images/rooms/room.svg', text: 'Две<br>комнаты'},
]

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
