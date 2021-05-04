// import React from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import {infrastructureSlides} from '../data/home-page'
import {gallerySlides} from '../data/gallery-data'
import LazyLoad from 'react-lazyload'
import InfrastructurePageBanner from '../components/pageBanners/InfrastructurePageBanner';
const InfrastructureSlider = dynamic(() => import('../components/sliders/InfrastructureSlider'))
const GallerySlider = dynamic(() => import('../components/sliders/GallerySlider'))

export default function Infrastructure() {
    return (<>
            <Head>
                <title>Инфраструктура – Rinn Rise – Анапа, Джемете</title>
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
