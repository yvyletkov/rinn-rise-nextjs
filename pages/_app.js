import '../styles/globals.scss';
import '../styles/fonts.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Header from './components/Header/Header';
import LazyLoad from 'react-lazyload';
import Footer from './components/Footer/Footer';

NProgress.configure({ showSpinner: <p>Loading</p> });

Router.onRouteChangeStart = () => {
  // console.log('onRouteChangeStart triggered');
  NProgress.start();
};

Router.onRouteChangeComplete = () => {
  // console.log('onRouteChangeComplete triggered');
  NProgress.done();
};

Router.onRouteChangeError = () => {
  // console.log('onRouteChangeError triggered');
  NProgress.done();
};

function MyApp({ Component, pageProps }) {
  return (
      <>
        <Header/>
        <Component {...pageProps} />
        <LazyLoad height={'200px'}>
          <Footer/>
        </LazyLoad>
      </>
  )
}

export default MyApp
