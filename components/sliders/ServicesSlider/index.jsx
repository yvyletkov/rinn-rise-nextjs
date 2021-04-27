import s from './style.module.scss'
import Slider from 'react-slick'
import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types';
import NextArrow from '../../SliderArrows/NextArrow';
import PrevArrow from '../../SliderArrows/PrevArrow';
import HeadlineCenter from '../../HeadlineCenter';

const ServicesSlider = ({slides}) => {

    const settings = {
        infinite: false,
        slidesToShow: 4,
        arrows: true,
        nextArrow: <NextArrow positionStyles={{
            bottom: '-45px',
            right: '50%',
            transform: 'translateX(120%)'
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '-45px',
            left: '50%',
            transform: 'translateX(-120%)'
        }}/>,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 550,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    dots: true,
                    arrows: false
                }
            },
        ]
    }

    return <div id='places' className={s.wrapper}>
        <div className={s.container}>
            <HeadlineCenter title='Услуги' style={{marginBottom: 0}}/>
            <div className={s.sliderWrapper}>
                <Slider {...settings} slidesToShow={4}>
                    {slides.map((item, index) => {
                        return <div key={index}>
                            <div className={s.sliderItemWrapper}>
                                <div className={s.index}>{'0' + (index + 1)}</div>
                                <div className={s.imageWrapper}>
                                    <Image width={70} height={70} src={item.img} alt={item.text}/>
                                </div>
                                <p dangerouslySetInnerHTML={{__html: item.text}}/>
                                {item.link && <div className={s.btn}>Подробнее</div>}
                            </div>
                        </div>
                    })}
                </Slider>
            </div>

        </div>
    </div>
}

ServicesSlider.propTypes = {
    slides: PropTypes.array.isRequired
}

export default ServicesSlider;
