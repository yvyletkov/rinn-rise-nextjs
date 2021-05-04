// import React from 'react'
import dynamic from 'next/dynamic'
import LazyLoad from 'react-lazyload'
import Head from 'next/head'
import {offersSlides, infrastructureSlides} from '../data/home-page'
import {gallerySlides} from '../data/gallery-data'
import {roomPreviewSlides} from '../data/shared-rooms-data'
import HomePageBanner from '../components/pageBanners/HomePageBanner'
const RoomsSlider = dynamic(() => import('../components/sliders/RoomsSlider'));
const TextBlock = dynamic(() => import('../components/TextBlock'));
const OffersSlider = dynamic(() => import('../components/sliders/OffersSlider'));
const InfrastructureSlider = dynamic(() => import('../components/sliders/InfrastructureSlider'));
const GallerySlider = dynamic(() => import('../components/sliders/GallerySlider'))

export default function Home() {
    return (<>
            <Head>
                <title>Rinn Rise – Главная страница – Анапа, Джемете</title>
            </Head>
            <main>

                <HomePageBanner/>

                <section className="section first">
                    <RoomsSlider title={'Номера и цены'} slides={roomPreviewSlides}/>
                </section>

                <section className="section">
                    <TextBlock
                        subtitle="Добро пожаловать"
                        title="Безупречный отдых для всей семьи"
                        content={`<p class='text'>
                                    Rinn Rise - новый современный отель, распахнувший свои двери для гостей в 2021 году. Отель
                                    расположен в живописном курортном поселке Джемете на солнечном Черноморском побережье недалеко от
                                    города Анапа. Джемете славится своими широкими песчаными пляжами и чистым морем с пологим дном.
                                    Более того, идеальный климат, теплое море и солёный морской воздух благоприятно влияют на здоровье
                                    отдыхающих.
                                </p>
                                <p class='text'>
                                    Наш отель имеет все необходимое для комфортного отдыха всей семьей: собственную закрытую территорию
                                    с озеленением, 5 трехэтажных корпусов с разными категориями номеров, ресторан и свой бассейн.
                                    Песчаный пляж и море находятся всего в 7-10 минутах ходьбы. Высококлассный сервис и идеальное
                                    расположение сделают ваш отдых у нас незабываемым!
    
                                </p>`}
                        img="/images/home-page/text-block.jpg"
                        withStarImage={true}/>
                </section>

                <section className="section">
                    <OffersSlider slides={offersSlides} title="Специальные предложения"/>
                </section>

                <section className="section">
                    <InfrastructureSlider slides={infrastructureSlides} title={'Инфраструктура'}/>
                </section>

                <LazyLoad height={'300px'} offset={1700}>
                    <section className="section">
                        <GallerySlider slides={gallerySlides} title={'Фотогалерея'}/>
                    </section>
                </LazyLoad>

            </main>
        </>
    )
}
