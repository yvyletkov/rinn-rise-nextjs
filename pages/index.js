import dynamic from 'next/dynamic'
import Head from 'next/head'
import InfrastructureSlider from '../components/sliders/InfrastructureSlider'
import OffersSlider from '../components/sliders/OffersSlider'
import HomePageBanner from '../components/HomePageBanner/HomePageBanner'
import RoomsSlider from '../components/sliders/RoomsSlider'
import TextBlock from '../components/TextBlock'
import {roomsSlides, offersSlides, infrastructureSlides, gallerySlides} from '../data/homePageData'
import LazyLoad from 'react-lazyload';
const GallerySlider = dynamic(() => import('../components/sliders/GallerySlider'))

export default function Home() {
    return (<>
            <Head>
                <title>Rinn Rise – Главная страница – Анапа, Джемете</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>

                <HomePageBanner/>

                <section className="section first">
                    <RoomsSlider title={'Номера и цены'} slides={roomsSlides}/>
                </section>

                <section className="section">
                    <TextBlock/>
                </section>

                {/*<LazyLoad height={'400px'} offset={800}>*/}
                {/*    <section className="section">*/}
                {/*        <OffersSlider slides={offersSlides} title="Специальные предложения"/>*/}
                {/*    </section>*/}
                {/*</LazyLoad>*/}

                {/*<LazyLoad height={'400px'} offset={800}>*/}
                {/*    <section className="section">*/}
                {/*        <InfrastructureSlider slides={infrastructureSlides} title={'Инфраструктура'}/>*/}
                {/*    </section>*/}
                {/*</LazyLoad>*/}

                {/*<LazyLoad height={'400px'} offset={800}>*/}
                {/*    <section className="section">*/}
                {/*        <GallerySlider slides={gallerySlides} title={'Фотогалерея'}/>*/}
                {/*    </section>*/}
                {/*</LazyLoad>*/}

                <section className="section">
                    <OffersSlider slides={offersSlides} title="Специальные предложения"/>
                </section>

                <section className="section">
                    <InfrastructureSlider slides={infrastructureSlides} title={'Инфраструктура'}/>
                </section>

                <LazyLoad height={'300px'} offset={700}>
                    <section className="section">
                        <GallerySlider slides={gallerySlides} title={'Фотогалерея'}/>
                    </section>
                </LazyLoad>

            </main>
        </>
    )
}
