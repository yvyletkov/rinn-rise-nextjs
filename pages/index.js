import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainSlider from "./components/MainSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SpecialsSlider from "./components/shared/sliders/SpecialsSlider/SpecialsSlider";

const slides = [
    {
        img: '/images/1.jpg',
        title: "Слайд 1",
        description: 'Описание слайда',
    },
    // {
    //     img: '/images/1.jpg',
    //     title: "Слайд 1",
    //     description: 'Описание слайда',
    // },
    // {
    //     img: '/images/1.jpg',
    //     title: "Слайд 1",
    //     description: 'Описание слайда',
    // },
];

const slidesPromo = [
    {
        img: './images/1.jpg',
        subtitle: "Летний отдых",
        title: "С выгодой до 20%",
        link: '/offers/letniy-otdyh',
        cashback: true,
    },
    {
        img: './images/1.jpg',
        subtitle: "до 20 000 рублей",
        title: "Кэшбэк на отдых",
        link: '/offers/cashback',
    },
    {
        img: './images/1.jpg',
        subtitle: "Длительное проживание 2021",
        title: "С выгодой до 25%",
        link: '/offers/dlitelnoe-prozhivaniye',
        cashback: true,
    },
    {
        img: './images/1.jpg',
        subtitle: "Английские каникулы",
        title: "в Крыму",
        link: '/offers/language-camp',
        cashback: true,
    },
]

export default function Home() {
    return (<>
            <Head>
                <title>Главная страница</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
                <MainSlider slides={slides} title={'Заголовок'}/>
                <SpecialsSlider slides={slidesPromo}/>
            </main>
        </>
    )
}
