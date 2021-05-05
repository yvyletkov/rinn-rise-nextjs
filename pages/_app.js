import '../styles/globals.scss'
import '../styles/fonts.css'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import '../styles/rodal.css'
import 'react-lazy-load-image-component/src/effects/blur.css'
import Head from 'next/head'
import Router from 'next/router'
import Header from '../components/shared/Header/Header'
import Footer from '../components/shared/Footer/Footer'
import ProgressBar from '@badrap/bar-of-progress'

const progress = new ProgressBar({
    size: 2,
    color: '#00af98',
    className: 'bar-of-progress',
    delay: 100,
});

Router.events.on('routeChangeStart', progress.start);
Router.events.on('routeChangeComplete', progress.finish);
Router.events.on('routeChangeError', progress.finish);

function MyApp({Component, pageProps}) {

    // const [loading, setLoading] = useState(true)
    //
    // useEffect(() => {
    //     const timeout = setTimeout(() => setLoading(false), 800)
    //     return () => clearTimeout(timeout)
    // }, [Component]);

    return (
        <>
            {/*{loading && <Loader/>}*/}
            <Head>
                <meta name="yandex-verification" content="0aec31329962eb02" />
                <script defer src="/scripts/ym.js"/>
            </Head>
            <Header/>
            <Component {...pageProps} />
            <Footer/>
        </>
    )
}

export default MyApp
