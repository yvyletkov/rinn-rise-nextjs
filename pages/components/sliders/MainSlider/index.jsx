import React from "react";
import Slider from "react-slick";
import Image from 'next/image'
import s from "./style.module.scss";
import styled from "styled-components";
import {NextArrow, PrevArrow} from "../../SliderArrows";
import CircleTip from "../../CircleTip";
import cx from "classnames"
import {useMediaQuery} from "../../customHooks/useMediaQuery";
import HeadlineCenter from "../../HeadlineCenter";

const SliderStyles = styled(Slider)`
  .slick-next:before,
  .slick-prev:before {
    color: #000;
  }

  .slick-list {
    overflow: visible;
  }

  .slick-track {
    margin: 0 auto;
    display: flex;
    justify-content: center;
  }

  @media screen and (min-width: 481px) {
    .slick-slider {
      height: unset;
      padding-bottom: 40px;
    }
  }
  @media screen and (max-width: 1200px) {
    .slick-slider {
      height: unset
    }
  }
`;


const MainSlider = ({
                        slides,
                        title,
                        titleMobile,
                        initialSlideIndex = 0,
                        manySlides = false,

                    }) => {

    const settings = {
        initialSlide: initialSlideIndex,
        infinite: true,
        slidesToShow: slides.length === 1 ? 1 : 3,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        nextArrow: <NextArrow positionStyles={{
            bottom: "-20px",
            right: "50%",
            transform: "translateX(120%)"
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: "-20px",
            left: "50%",
            transform: "translateX(-120%)"
        }}/>,
        speed: 500,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    initialSlide: 0,
                    centerMode: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    const items = slides.map((item, index) => {
        const {img, title, description, popupData, imgHeight} = item;
        return (
            <div className="SliderElement" key={index}>
                <MainSliderItem
                    img={img}
                    title={title}
                    description={description}
                    active={useMediaQuery('(max-width: 490px)') ? false : index === 1}
                />
            </div>
        );
    });

    const containerStyles = cx(s.container, {[s.small]: slides.length === 1})

    return (
        <div className={s.wrapper}>
            <div className={containerStyles}>

                {(useMediaQuery('(max-width: 480px)') && slides.length === 1) &&
                <div style={{
                    position: 'absolute',
                    transform: 'rotate(-90deg)',
                    right: '-30%', color: 'rgb(226, 226, 226)',
                    fontFamily: 'Helvetica Neue Black',
                    fontSize: '9vw',
                    lineHeight: '0.8',
                    top: '47%'
                }}>
                    Новые программы<br/>в разработке
                </div>}

                <HeadlineCenter
                    title={useMediaQuery('(max-width: 490px)').matches ? (titleMobile || title) : title}/>


                <SliderStyles>
                    <Slider {...settings}>{items}</Slider>
                </SliderStyles>

            </div>
        </div>
    );
};

export default MainSlider;


const MainSliderItem = (props) => {
    const {img, title, description, active} = props;

    let [showDescr, setShowDescr] = React.useState(active);

    let classNames = cx([s.card], {[s.active]: showDescr}, {[s.squared]: props.squaredCards})

    return (
        <div className={classNames}>


            <Image layout='fill' className={s.img}
                   src={img} alt=""/>

            <div className={s.content}>
                <h6 className={s.title} dangerouslySetInnerHTML={{__html: title}}/>

                <div className={s.description}>
                    <p dangerouslySetInnerHTML={{__html: description}}
                       style={{marginBottom: '10px'}}/>

                </div>

                <div className={s.moreBtn} onClick={() => setShowDescr(!showDescr)}>
                    {showDescr ? 'Cкрыть' : 'Подробнее'}
                </div>

            </div>


        </div>);
};
