import '../styles/globals.scss'
import '../styles/fonts.css'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Header from '../components/Header/Header'
import LazyLoad from 'react-lazyload'
import Footer from '../components/Footer/Footer'

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
