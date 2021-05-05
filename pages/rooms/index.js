import React from 'react'
import Head from 'next/head'
import {offersSlides} from '../../data/home-page'
import {roomPreviewSlides} from '../../data/shared-rooms-data'
import {servicesSlides} from '../../data/resort-vacation'
import RoomsAndPricesBanner from '../../components/pageBanners/RoomsAndPricesBanner'
import OffersSlider from '../../components/sliders/OffersSlider'
import RoomsSlider from '../../components/sliders/RoomsSlider'
import TextBlock from '../../components/TextBlock'
import ServicesSlider from '../../components/sliders/ServicesSlider'

export default function RoomsPage() {
    return (<>
            <Head>
                <title>Номера и цены – Rinn Rise – Анапа, Джемете</title>
            </Head>
            <main>
                <RoomsAndPricesBanner/>
                <section className='section'>
                    <TextBlock title={'Безупречный отдых для всей семьи'}
                               subtitle={'Добро пожаловать'}
                               img={'/images/rooms/2.jpg'}
                               content={'<p class="text">Номерной фонд Rinn Rise включает в себя 67 номеров разных категорий. Наши номера укомплектованы всем необходимым для качественного и комфортного отдыха. У нас может разместиться как семья с одним ребенком, так и большая компания.</p>'}/>
                </section>

                <section className="section">
                    <RoomsSlider title={'Номера и цены'} slides={roomPreviewSlides}/>
                </section>

                <section className="section">
                    <ServicesSlider slides={servicesSlides}/>
                </section>

                <section className="section">
                    <OffersSlider slides={offersSlides} title="Специальные предложения"/>
                </section>

            </main>
        </>
    )
}
