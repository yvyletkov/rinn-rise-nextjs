import React from 'react'
import Slider from 'react-slick'
import s from './style.module.scss'
import GallerySliderItem from './GallerySliderItem'
import HeadlineCenter from '../../shared/HeadlineCenter'
import NextArrow from '../../shared/SliderArrows/NextArrow'
import PrevArrow from '../../shared/SliderArrows/PrevArrow'
import {SRLWrapper} from 'simple-react-lightbox'
import SimpleReactLightbox from 'simple-react-lightbox'

const GallerySlider = ({title = 'Фотогалерея', slides = []}) => {

    const settings = {
        infinite: true,
        centerMode: true,
        speed: 500,
        slidesToShow: 3,
        rows: 2,
        slidesPerRow: 2,
        responsive: [
            {
                breakpoint: 1450,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: '60px'
                }
            },
            {
                breakpoint: 330,
                settings: {
                    arrows: false,
                    dots: true,
                    slidesToShow: 1,
                    slidesPerRow: 1,
                    centerPadding: '20px'
                }
            },
        ],
        nextArrow: <NextArrow positionStyles={{
            bottom: '-75px',
            right: '50%',
            transform: 'translateX(120%)'
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '-75px',
            left: '50%',
            transform: 'translateX(-120%)'
        }}/>
    }

    const items = slides.map(({img}, index) => {
        return (
            <div className="SliderElement" key={index}>
                <GallerySliderItem
                    img={img}
                />
            </div>
        )
    })

    const options = {
        buttons: {
            showAutoplayButton: false,
            showCloseButton: true,
            showDownloadButton: false,
            showFullscreenButton: false,
        },
        caption: {
            showCaption: false,
        }
    }

    return (
        <SimpleReactLightbox>
            <SRLWrapper options={options}>
                <div id="gallery" className={s.wrapper}>
                    <div className={s.container}>
                        <HeadlineCenter title={title}/>
                        <Slider {...settings}>{items}</Slider>
                    </div>
                </div>
            </SRLWrapper>
        </SimpleReactLightbox>
    )
}

export default GallerySlider
