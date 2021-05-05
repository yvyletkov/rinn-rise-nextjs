import React from 'react';
import s from './style.module.scss';
import PrevArrow from "../../shared/SliderArrows/PrevArrow";
import NextArrow from '../../shared/SliderArrows/NextArrow';
import Slider from "react-slick";
import OffersSliderItem from "./OffersSliderItem";
import HeadlineCenter from '../../shared/HeadlineCenter';
import PropTypes from 'prop-types';

const OffersSlider = ({slides, title}) => {

    const settings = {
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "15px",
            left: '50%',
            transform: 'translateX(900%)'
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "15px",
            left: '50%',
            transform: 'translateX(750%)'
        }}/>,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = slides.map((item, index) => {
        const {img, title, subtitle, link} = item;
        return (
            <div className="SliderElement" key={index}>
                <OffersSliderItem
                    img={img}
                    title={title}
                    subtitle={subtitle}
                    active={index === 1}
                    link={link}
                />
            </div>
        );
    });

    return (
        <div className={s.sliderContainer}>
            <HeadlineCenter title={title}/>
            <div className={s.sliderWrapper}>
                <Slider {...settings}>{items}</Slider>
            </div>
        </div>
    )
}


OffersSlider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
}

OffersSlider.defaultProps = {
    slides: [],
    title: 'Заголовок'
}

export default OffersSlider;