import '../styles/globals.scss';
import '../styles/fonts.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import dynamic from 'next/dynamic'
import Router from 'next/router';
import Header from '../components/Header/Header';
import LazyLoad from 'react-lazyload';
import Footer from '../components/Footer/Footer';
import {useEffect, useState} from 'react';

function MyApp({Component, pageProps}) {
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        const start = () => {
            console.log('start');
            setLoading(true);
        };
        const end = () => {
            console.log('findished');
            setLoading(false);
        };
        Router.events.on('routeChangeStart', start);
        Router.events.on('routeChangeComplete', end);
        Router.events.on('routeChangeError', end);
        return () => {
            Router.events.off('routeChangeStart', start);
            Router.events.off('routeChangeComplete', end);
            Router.events.off('routeChangeError', end);
        };
    }, []);
    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <>
                    <Header/>
                    <Component {...pageProps} />
                    <LazyLoad height={'200px'}>
                        <Footer/>
                    </LazyLoad>
                </>
            )}
        </>
    );
}

export default MyApp
