import Head from 'next/head'
import styles from '../styles/Home.module.css'
import MainSlider from "./components/MainSlider";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
]

export default function Home() {
    return (<>
            <Head>
                <title>Главная страница</title>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main>
              <MainSlider slides={slides} title={'Заголовок'}/>
            </main>
        </>
    )
}
