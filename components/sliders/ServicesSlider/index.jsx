import s from './style.module.scss'
import Slider from 'react-slick'
import React from 'react'
import Image from 'next/image'
import PropTypes from 'prop-types';

const ServicesSlider = ({slides}) => {

    const settings = {
        infinite: false,
        slidesToShow: 4,
        arrows: false,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                }
            },
        ]
    }

    return <div id='places' className={s.wrapper}>
        <div className={s.container}>
            <div className={s.sliderWrapper}>
                <Slider {...settings} slidesToShow={4}>
                    {slides.map((item, index) => {
                        return <div key={index}>
                            <div className={s.sliderItemWrapper}>
                                <div>{index + 1}</div>
                                <Image width={50} height={50} src={item.img} alt={item.text}/>
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
