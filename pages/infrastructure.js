import dynamic from 'next/dynamic'
import Head from 'next/head'
import InfrastructureSlider from '../components/sliders/InfrastructureSlider'
import OffersSlider from '../components/sliders/OffersSlider'
import HomePageBanner from '../components/pageBanners/HomePageBanner'
import RoomsSlider from '../components/sliders/RoomsSlider'
import TextBlock from '../components/TextBlock'
import {offersSlides, infrastructureSlides} from '../data/home-page'
import {gallerySlides} from '../data/gallery-data'
import {roomPreviewSlides} from '../data/shared-rooms-data'
import LazyLoad from 'react-lazyload'
import React from 'react'
import HeadlineCenter from '../components/shared/HeadlineCenter';
import InfrastructurePageBanner from '../components/pageBanners/InfrastructurePageBanner';

const GallerySlider = dynamic(() => import('../components/sliders/GallerySlider'))

export default function Infrastructure() {
    return (<>
            <Head>
                <title>Rinn Rise – Инфраструктура – Анапа, Джемете</title>
            </Head>
            <main>
                <InfrastructurePageBanner />

                <section className="section first">
                    <InfrastructureSlider slides={infrastructureSlides} title={'Инфраструктура'}/>
                </section>

                <LazyLoad height={'300px'}>
                    <section className="section">
                        <GallerySlider slides={gallerySlides} title={'Фотогалерея'}/>
                    </section>
                </LazyLoad>

            </main>
        </>
    )
}
