import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InfrastructureSlider from "./components/sliders/InfrastructureSlider";
import SpecialsSlider from "./components/sliders/OffersSlider";
import Header from "./components/Header/Header";
import HomePageBanner from './components/HomePageBanner/HomePageBanner';
import RoomsSlider from './components/sliders/RoomsSlider';
import TextBlock from './components/TextBlock';
import Footer from './components/Footer/Footer';

const slides = [
    {
        img: '/images/1.jpg',
        title: "Слайд 1",
        description: 'Описание слайда',
    },
    {
        img: '/images/1.jpg',
        title: "Слайд 1",
        description: 'Описание слайда',
    },
    {
        img: '/images/1.jpg',
        title: "Слайд 1",
        description: 'Описание слайда',
    }

];

const slidesPromo = [
    {
        img: '/images/1.jpg',
        subtitle: "Летний отдых",
        title: "С выгодой до 20%",
        link: '/offers/letniy-otdyh',
        cashback: true,
    },
    {
        img: '/images/1.jpg',
        subtitle: "до 20 000 рублей",
        title: "Кэшбэк на отдых",
        link: '/offers/cashback',
    },
    {
        img: '/images/1.jpg',
        subtitle: "Длительное проживание 2021",
        title: "С выгодой до 25%",
        link: '/offers/dlitelnoe-prozhivaniye',
        cashback: true,
    },
    {
        img: '/images/1.jpg',
        subtitle: "Английские каникулы",
        title: "в Крыму",
        link: '/offers/language-camp',
        cashback: true,
    },
]

export default function Home() {
    return (<>
            <Head>
            
                <title>Rinn Rise – Главная страница – Анапа, Джемете</title>

                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <Header/>
                <HomePageBanner />
                <section className='section first'>
                    <RoomsSlider title={'Номера и цены'}/>
                </section>
                <section>
                    <TextBlock/>
                </section>
                <section className='section'>
                    <SpecialsSlider slides={slidesPromo}/>
                </section>
                <section className='section'>
                    <InfrastructureSlider slides={slides} title={'Инфраструктура'}/>
                </section>
                <Footer/>
            </main>
        </>
    )
}
