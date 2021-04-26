import Head from 'next/head'
import styles from '../styles/Home.module.css'
import InfrastructureSlider from './components/sliders/InfrastructureSlider';
import SpecialsSlider from './components/sliders/OffersSlider';
import Header from './components/Header/Header';
import HomePageBanner from './components/HomePageBanner/HomePageBanner';
import RoomsSlider from './components/sliders/RoomsSlider';
import TextBlock from './components/TextBlock';
import Footer from './components/Footer/Footer';
import LazyLoad from 'react-lazyload';

const slides = [
    {
        img: '/images/infrastructure/wild-beach.jpg',
        title: 'Дикий пляж',
        description: `Дикий пляж в Джемете – уникальная возможность получить морскую гладь в чистом виде. Без мусора, пронзительного людского шума и других отвлекающих от прекрасного отдыха факторов.`,
    },
    {
        img: '/images/infrastructure/dolphinarium.jpg',
        title: 'Дельфинарий «Немо»',
        description: `Дельфинарий «Немо» в Джемете — одна из популярных туристических достопримечательностей, открытая в 2013 году. «Немо» — известная сеть океанариумов на территории стран СНГ, известная красочными представлениями и множеством развлечений с представителями подводного мира — дайвингом, дельфинотерапией и многими другими.`,
    },
    {
        img: '/images/infrastructure/aquapark.jpg',
        title: 'Аквапарк «Тики-Так»',
        description: `В аквапарке представлены новейшие аттракционы. Для любителей экстрима представлен аттракцион, оборудованный специальной капсулой для вертикального старта, – на такой горке скорость спуска развивается до 12 м/сек!<br/>Также оборудованы горки «свободного падения», горка-водоворот, горка-лабиринт и мн. др. Для детишек предусмотрен детский игровой городок, со всевозможными спусками, игровыми площадками, водными игрушками и опрокидывающейся емкостью с водой, расположенной на высоте 8 м.`,
    }

];

const slidesPromo = [
    {
        img: '/images/1.jpg',
        subtitle: 'Летний отдых',
        title: 'С выгодой до 20%',
        link: '/offers/letniy-otdyh',
        cashback: true,
    },
    {
        img: '/images/1.jpg',
        subtitle: 'до 20 000 рублей',
        title: 'Кэшбэк на отдых',
        link: '/offers/cashback',
    },
    {
        img: '/images/1.jpg',
        subtitle: 'Длительное проживание 2021',
        title: 'С выгодой до 25%',
        link: '/offers/dlitelnoe-prozhivaniye',
        cashback: true,
    },
    {
        img: '/images/1.jpg',
        subtitle: 'Английские каникулы',
        title: 'в Крыму',
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
                <HomePageBanner/>
                <section className="section first">
                    <RoomsSlider title={'Номера и цены'}/>
                </section>
                <section>
                    <TextBlock/>
                </section>
                <section className="section">
                    <SpecialsSlider slides={slidesPromo}/>
                </section>
                <section className="section">
                    <InfrastructureSlider slides={slides} title={'Инфраструктура'}/>
                </section>
                <LazyLoad height={'200px'}>
                    <Footer/>
                </LazyLoad>
            </main>
        </>
    )
}
