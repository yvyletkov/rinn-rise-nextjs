import React from 'react'
import Slider from 'react-slick'
import s from './style.module.scss'
import HeadlineCenter from '../../shared/HeadlineCenter'
import NextArrow from '../../shared/SliderArrows/NextArrow'
import PrevArrow from '../../shared/SliderArrows/PrevArrow'
import PropTypes from 'prop-types'

const RoomPhotosSlider = ({
                              title,
                              slides,
                          }) => {

    const settings = {
        dots: false,
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: '-90px',
            right: '50%',
            transform: 'translateX(120%)'
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '-90px',
            left: '50%',
            transform: 'translateX(-120%)'
        }}/>,
        responsive: [
            {
                breakpoint: 480,
                settings: {
                    className: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                    arrows: false
                }
            },
        ]
    }

    const items =
        slides.map(({img}, index) =>
            <div key={key}>
                <img className={s.item} alt={title} key={index} src={img}/>
            </div>
        )

    return (
        <div id="gallery" className={s.wrapper}>
            <div className={s.container}>
                <HeadlineCenter title={title}/>
                <div className={s.sliderWrapper}>
                    <Slider {...settings}>{items}</Slider>
                </div>
            </div>
        </div>
    )
}

RoomPhotosSlider.propTypes = {
    title: PropTypes.string,
    slides: PropTypes.arrayOf(PropTypes.object)
}

RoomPhotosSlider.defaultProps = {
    title: 'Фотогалерея',
    slides: []
}

export default RoomPhotosSlider
