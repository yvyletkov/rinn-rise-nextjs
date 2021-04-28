import dynamic from 'next/dynamic'
import Head from 'next/head'
import InfrastructureSlider from '../components/sliders/InfrastructureSlider'
import OffersSlider from '../components/sliders/OffersSlider'
import RoomsSlider from '../components/sliders/RoomsSlider'
import TextBlock from '../components/TextBlock'
import {offersSlides, infrastructureSlides} from '../data/home-page';
import {gallerySlides} from '../data/gallery-data';
import {roomsSlides} from '../data/rooms-data';
import LazyLoad from 'react-lazyload'
import React from 'react'
import RoomsAndPricesBanner from '../components/pageBanners/RoomsAndPricesBanner'

const GallerySlider = dynamic(() => import('../components/sliders/GallerySlider'))

export default function RoomsPage() {
    return (<>
            <Head>
                <title>Rinn Rise – Номера и цены – Анапа, Джемете</title>
            </Head>
            <main>
                <RoomsAndPricesBanner/>
                <section className="section">
                    <TextBlock title={'Безупречный отдых для всей семьи'}
                               subtitle={'Добро пожаловать'}
                               img={'/images/rooms/2.jpg'}
                               content={'<p class="text">Номерной фонд Rinn Rise включает в себя 67 номеров разных категорий. Наши номера укомплектованы всем необходимым для качественного и комфортного отдыха. У нас может разместиться как семья с одним ребенком, так и большая компания.</p>'}/>
                </section>

                {/*<section className="section">*/}
                {/*    <TextBlock*/}
                {/*        subtitle="Добро пожаловать"*/}
                {/*        title="Безупречный отдых для всей семьи"*/}
                {/*        content={`<p class='text'>*/}
                {/*                    Rinn Rise - новый современный отель, распахнувший свои двери для гостей в 2021 году. Отель*/}
                {/*                    расположен в живописном курортном поселке Джемете на солнечном Черноморском побережье недалеко от*/}
                {/*                    города Анапа. Джемете славится своими широкими песчаными пляжами и чистым морем с пологим дном.*/}
                {/*                    Более того, идеальный климат, теплое море и солёный морской воздух благоприятно влияют на здоровье*/}
                {/*                    отдыхающих.*/}
                {/*                </p>*/}
                {/*                <p class='text'>*/}
                {/*                    Наш отель имеет все необходимое для комфортного отдыха всей семьей: собственную закрытую территорию*/}
                {/*                    с озеленением, 5 трехэтажных корпусов с разными категориями номеров, ресторан и свой бассейн.*/}
                {/*                    Песчаный пляж и море находятся всего в 7-10 минутах ходьбы. Высококлассный сервис и идеальное*/}
                {/*                    расположение сделают ваш отдых у нас незабываемым!*/}

                {/*                </p>`}*/}
                {/*        img='/images/home-page/text-block.jpg'/>*/}
                {/*</section>*/}

                {/*<section className="section">*/}
                {/*    <OffersSlider slides={offersSlides} title="Специальные предложения"/>*/}
                {/*</section>*/}

                {/*<section className="section">*/}
                {/*    <InfrastructureSlider slides={infrastructureSlides} title={'Инфраструктура'}/>*/}
                {/*</section>*/}

                {/*<LazyLoad height={'300px'} offset={1700}>*/}
                {/*    <section className="section">*/}
                {/*        <GallerySlider slides={gallerySlides} title={'Фотогалерея'}/>*/}
                {/*    </section>*/}
                {/*</LazyLoad>*/}

            </main>
        </>
    )
}
