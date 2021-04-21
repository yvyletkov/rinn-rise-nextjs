import React from "react";
import Slider from "react-slick";
import s from "./style.module.scss";
import styled from "styled-components";
import {NextArrow, PrevArrow} from "../SliderArrows";
import CircleTip from "../CircleTip";
import cx from "classnames"
import {useMediaQuery} from "../customHooks/useMediaQuery";

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
      padding-bottom: ${p => p.onlyTitle ? '0' : '40px'}
    }
  }
  @media screen and (max-width: 1200px) {
    .slick-slider {
      height: unset
    }
  }
`;

const SliderStylesManySlider = styled(Slider)`
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
    justify-content: start;
  }

  @media screen and (min-width: 481px) {
    .slick-slider {
      height: unset;
      padding-bottom: ${p => p.onlyTitle ? '0' : '40px'}
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
                    withButton = false,
                    activatePopup,
                    withTip = false,
                    onlyTitle = false,
                    topText = null,
                    bottomText = null,
                    allClosedAtStart = false,
                    squaredCards = false
                }) => {

    const settings = {
        initialSlide: initialSlideIndex,
        infinite: true,
        slidesToShow: slides.length === 1 ? 1 : 3,
        centerMode: true,
        arrows: manySlides,
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
                <EventMainSliderItem
                    onlyTitle={onlyTitle}
                    withTip={withTip}
                    key={index}
                    index={index}
                    withButton={withButton}
                    imgHeight={imgHeight}
                    img={img}
                    title={title}
                    description={description}
                    popupData={popupData}
                    activatePopup={activatePopup}
                    active={!onlyTitle && !allClosedAtStart ? (useMediaQuery('(max-width: 490px)') ? false : index === 1) : false}
                    squaredCards={squaredCards}
                />
            </div>
        );
    });

    const containerStyles = cx(s.container, {[s.withPadding]: manySlides, [s.small]: slides.length === 1})

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
                {/*<HeadlineCenter*/}
                {/*    title={window.matchMedia('(max-width: 490px').matches ? (titleMobile || title) : title}/>*/}

                {topText && <p className={s.text}>{topText}</p>}

                {manySlides ? <SliderStylesManySlider><Slider {...settings}>{items}</Slider></SliderStylesManySlider>
                    :
                    <SliderStyles onlyTitle={onlyTitle}>
                        <Slider {...settings}>{items}</Slider>
                    </SliderStyles>}
                {bottomText && <p className={s.text}>{bottomText}</p>}
            </div>
        </div>
    );
};

export default MainSlider;


const EventMainSliderItem = (props) => {
    let [showTip, setShowTip] = React.useState(false);

    const {img, title, description, active, index, withButton, activatePopup, withTip, onlyTitle, imgHeight = null} = props;

    let [showDescr, setShowDescr] = React.useState(active);

    let classNames = cx([s.card], {[s.active]: showDescr}, {[s.squared]: props.squaredCards})

    return (
        <div className={classNames}>


            <img className={s.img} style={{height: imgHeight}} src={img} alt=""/>

            <div className={s.content}>
                <h6 className={onlyTitle ? s.titleSmall : s.title} dangerouslySetInnerHTML={{__html: title}}/>
                {withTip && <CircleTip accordeonStatus={showTip} onClick={() => setShowTip(!showTip)} forDesktop
                                       style={{marginLeft: '10px'}}/>}


                {!onlyTitle && <>
                    <div className={s.description}>
                        <p dangerouslySetInnerHTML={{__html: description}} style={{marginBottom: withButton ? '10px' : '0'}}/>

                    </div>


                    <div className={s.moreBtn} onClick={() => setShowDescr(!showDescr)}>
                        {showDescr ? (withButton ? '' : 'Cкрыть') : 'Подробнее'}
                    </div>
                </>}

            </div>


        </div>);
};
