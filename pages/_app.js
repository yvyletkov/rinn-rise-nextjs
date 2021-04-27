import '../styles/globals.scss'
import '../styles/fonts.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import dynamic from 'next/dynamic';
import Header from '../components/Header/Header'
import LazyLoad from 'react-lazyload'
import {useEffect, useState} from 'react'
import Loader from '../components/Loader'
const Footer = dynamic(() => import('../components/Footer/Footer'))

function MyApp({Component, pageProps}) {

    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const timeout = setTimeout(() => setLoading(false), 1000)
        return () => clearTimeout(timeout)
    }, [Component]);

    return (
        <>
            {loading && <Loader/>}
                    <Header/>
                    <Component {...pageProps} />
                    <LazyLoad height={'300px'} offset={150}>
                        <Footer/>
                    </LazyLoad>
        </>
    );
}

export default MyApp
