import dynamic from 'next/dynamic'
import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import ResortVacationPageBanner from '../components/ResortVacationPageBanner'
import {gallerySlides, offersSlides, roomsSlides} from '../data/homePageData';
import AdvantagesSlider from '../components/sliders/AdvantagesSlider';
import {advantagesSlidesData} from '../data/resort-vacation';
import RoomsSlider from '../components/sliders/RoomsSlider';
import OffersSlider from '../components/sliders/OffersSlider';
const GallerySlider = dynamic(() => import('../components/sliders/GallerySlider'))

export default function ResortVacation() {
    return (<>
            <Head>
                <title>Курортный отдых – Rinn Rise – Анапа, Джемете</title>
            </Head>
            <main>

                <ResortVacationPageBanner/>

                <section className='section first'>
                    <AdvantagesSlider slides={advantagesSlidesData}/>
                </section>

                <section className="section">
                    <RoomsSlider title={'Номера и цены'} slides={roomsSlides}/>
                </section>

                <section className="section">
                    <OffersSlider slides={offersSlides} title="Специальные предложения"/>
                </section>

                <LazyLoad height={'300px'} offset={1000}>
                    <section className='section'>
                        <GallerySlider slides={gallerySlides} title={'Фотогалерея'}/>
                    </section>
                </LazyLoad>

            </main>
        </>
    )
}
