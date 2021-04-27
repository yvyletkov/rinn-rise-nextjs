import dynamic from 'next/dynamic'
import Head from 'next/head'
import LazyLoad from 'react-lazyload'
import ResortVacationPageBanner from '../components/ResortVacationPageBanner'
import {gallerySlides} from '../data/homePageData';
import AdvantagesSlider from '../components/sliders/AdvantagesSlider';
import {advantagesSlidesData} from '../data/resort-vacation';
const GallerySlider = dynamic(() => import('../components/sliders/GallerySlider'))

export default function Home() {
    return (<>
            <Head>
                <title>Rinn Rise – Главная страница – Анапа, Джемете</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>

                <ResortVacationPageBanner/>

                <section className='section'>
                    <AdvantagesSlider slides={advantagesSlidesData}/>
                </section>

                <LazyLoad height={'300px'} offset={1000}>
                    <section className="section">
                        <GallerySlider slides={gallerySlides} title={'Фотогалерея'}/>
                    </section>
                </LazyLoad>

            </main>
        </>
    )
}
