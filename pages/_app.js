import '../styles/globals.scss'
import '../styles/fonts.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Header from '../components/shared/Header/Header'
import {useEffect, useState} from 'react'
import Loader from '../components/shared/Loader'
import Head from 'next/head'
import Footer from '../components/shared/Footer/Footer';

function MyApp({Component, pageProps}) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 800)
        return () => clearTimeout(timeout)
    }, [Component]);

    return (
        <>
            {/*{loading && <Loader/>}*/}
            <Head>
                <script defer src='/scripts/ym.js'/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    );
}

export default MyApp
