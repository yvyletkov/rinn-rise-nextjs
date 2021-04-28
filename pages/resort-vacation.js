import dynamic from 'next/dynamic'
import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import ResortVacationPageBanner from '../components/ResortVacationPageBanner'
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
    const backgroundItemsStyles = {
        wrapper: {
            position: 'absolute',
            left: '50%',
            transform: 'translateX(-800px)',
            bottom: '30px',
            width: '200px',
            height: '200px',
        },
        glasses: {
            width: '400px',
            position: 'absolute',
            left: 0,
            top: 0
        },
        berry: {
            width: '130px',
            position: 'absolute',
            left: '150px',
            bottom: '-90px'
        }
    }
    return (
        <>
            <Head>
                <title>Курортный отдых – Rinn Rise – Анапа, Джемете</title>
            </Head>
            <main>

                <ResortVacationPageBanner/>

                <section className="section first" style={{position:'relative'}}>
                    <AdvantagesSlider slides={advantagesSlidesData}/>
                    <div style={backgroundItemsStyles.wrapper}>
                        <img style={backgroundItemsStyles.glasses} src={'/images/resort-vacation/glasses.png'}
                             alt={'очки'}/>
                        <img style={backgroundItemsStyles.berry} src={'/images/resort-vacation/yagody.png'}
                             alt={'ягоды'}/>
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
