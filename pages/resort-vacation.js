import dynamic from 'next/dynamic'
import Head from 'next/head'
import s from '../styles/resortVacation.module.scss'
import LazyLoad from 'react-lazyload'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import ResortVacationPageBanner from '../components/pageBanners/ResortVacationPageBanner'
import {offersSlides} from '../data/home-page'
import {gallerySlides} from '../data/gallery-data'
import {roomsSlides} from '../data/rooms-data'
import {advantagesSlidesData, servicesSlides} from '../data/resort-vacation'
import AdvantagesSlider from '../components/sliders/AdvantagesSlider'
import RoomsSlider from '../components/sliders/RoomsSlider'
import OffersSlider from '../components/sliders/OffersSlider'
import ServicesSlider from '../components/sliders/ServicesSlider';
const GallerySlider = dynamic(() => import('../components/sliders/GallerySlider'))

export default function ResortVacation() {
    return (
        <>
            <Head>
                <title>Курортный отдых – Rinn Rise – Анапа, Джемете</title>
            </Head>
            <main>

                <ResortVacationPageBanner/>

                <section className="section first" style={{position:'relative'}}>
                    <AdvantagesSlider slides={advantagesSlidesData}/>
                    <div className={s.backgroundImages}>
                        <LazyLoadImage effect='blur' wrapperClassName={s.glasses} src={'/images/resort-vacation/glasses.png'}
                             alt={'Очки'}/>
                        <LazyLoadImage effect='blur' wrapperClassName={s.berry} src={'/images/resort-vacation/yagody.png'}
                             alt={'Ягоды'}/>
                    </div>
                </section>

                <section className="section">
                    <RoomsSlider title={'Номера и цены'} slides={roomsSlides}/>
                </section>

                <section className="section">
                    <ServicesSlider slides={servicesSlides}/>
                </section>

                <section className="section">
                    <OffersSlider slides={offersSlides} title="Специальные предложения"/>
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
