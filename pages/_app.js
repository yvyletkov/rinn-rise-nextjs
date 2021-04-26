import '../styles/globals.scss'
import '../styles/fonts.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Header from '../components/Header/Header'
import LazyLoad from 'react-lazyload'
import Footer from '../components/Footer/Footer'
import SimpleReactLightbox from 'simple-react-lightbox'
import {useEffect, useState} from 'react'
import Loader from '../components/Loader';

function MyApp({Component, pageProps}) {

    const [loading, setLoading] = useState(true)

    // useEffect(() => {
    //     const timeout = setTimeout(() => setLoading(false), 1000)
    //     return () => clearTimeout(timeout)
    // }, [Component]);

    return (
        <>
            {/*{loading && <Loader/>}*/}

                <SimpleReactLightbox>
                    <Header/>
                    <Component {...pageProps} />
                    <LazyLoad height={'200px'}>
                        <Footer/>
                    </LazyLoad>
                </SimpleReactLightbox>
            {/*)}*/}
        </>
    );
}

export default MyApp
