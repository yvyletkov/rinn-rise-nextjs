import React from 'react';
import s from './SpecialsSlider.module.scss';
import styled from "styled-components";
import {NextArrow, PrevArrow} from "../../../SliderArrows";
import Slider from "react-slick";
import SpecialsSliderItem from "./SpecialsSliderItem/SpecialsSliderItem";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }
  .slick-list {
    transition: all 0.3s;
    overflow: visible;
  }
  .slick-slider {
    margin-top: 90px;
  }
  .slick-dots li {
    margin: 0
  }

  .slick-slide img {
    width: 100%;
    margin: 0 40px 0 0;
  }

  .slick-track {
    margin: 0 auto;
  }
  @media screen and (max-width: 1200px){
    .slick-slider {
      margin-top: 0;
    }
  }
`;

const SpecialsSlider = ({slides}) => {

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
            <SliderStyles>
                <Slider {...settings}>{items}</Slider>
            </SliderStyles>
        </div>
    )
}

export default SpecialsSlider