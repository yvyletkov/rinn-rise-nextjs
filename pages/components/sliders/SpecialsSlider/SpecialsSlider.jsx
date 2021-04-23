import React from 'react';
import s from './SpecialsSlider.module.scss';
import PrevArrow from "../../SliderArrows/PrevArrow";
import NextArrow from '../../SliderArrows/NextArrow';
import Slider from "react-slick";
import SpecialsSliderItem from "./SpecialsSliderItem/SpecialsSliderItem";

const SpecialsSlider = ({slides = []}) => {

    const settings = {
        infinite: true,
        centerPadding: "60px",
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow positionStyles={{
            bottom: "15px",
            right: "calc(50% - 60px)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "15px",
            left: "calc(50% - 60px)"
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
                <SpecialsSliderItem
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
            <div className={s.sliderTitle}>Активные спецпредложения</div>
            <div className={s.sliderWrapper}>
                <Slider {...settings}>{items}</Slider>
            </div>
        </div>
    )
}

export default SpecialsSlider