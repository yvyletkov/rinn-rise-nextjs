import React, {useEffect, useRef, useState} from 'react'
import Slider from 'react-slick'
import s from './style.module.scss'
import OtherRoomsSliderItem from './OtherRoomsSliderItem'
import NextArrow from '../../shared/SliderArrows/NextArrow'
import PrevArrow from '../../shared/SliderArrows/PrevArrow'
import useMediaQuery from '../../shared/customHooks/useMediaQuery'
import HeadlineCenter from '../../shared/HeadlineCenter'
import PropTypes from 'prop-types'

const OtherRoomsSlider = ({title, slides}) => {

    const initialCurrentSlideIndex = useMediaQuery('(min-width: 769px)') ? 2 : 0;

    let [currentSlideIndex, setCurrentSlideIndex] = useState(initialCurrentSlideIndex);

    const items = slides.map((item, index) => {
        const {
            img,
            link,
            title,
            capacity,
            area,
            desc
        } = item;
        return (
            <div className="sliderElement" key={index}>
                <OtherRoomsSliderItem
                    active={currentSlideIndex === index}
                    link={link}
                    img={img}
                    title={title}
                    desc={desc}
                    capacity={capacity}
                    area={area}
                />
            </div>
        );
    });

    const afterChangeHandler = (index) => setCurrentSlideIndex(index)

    const settings = {
        initialSlide: initialCurrentSlideIndex,
        afterChange: afterChangeHandler,
        dots: false,
        className: 'center',
        centerMode: true,
        infinite: false,
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
                    initialSlide: 0,
                    className: false,
                    centerMode: false,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: true,
                    arrows: false
                }
            },
        ]
    };

    useEffect(() => {
        if (initialCurrentSlideIndex === 2) {
            sliderRef.current.slickGoTo(initialCurrentSlideIndex);
            setCurrentSlideIndex(initialCurrentSlideIndex)
        }
    }, [initialCurrentSlideIndex])

    const sliderRef = useRef();

    return (
        <div className={s.wrapper}>
            <HeadlineCenter title={title}/>
            <Slider ref={sliderRef} {...settings}>{items}</Slider>
        </div>
    );
};

OtherRoomsSlider.propTypes = {
    title: PropTypes.string,
    slides: PropTypes.arrayOf(PropTypes.object)
}

OtherRoomsSlider.defaultProps = {
    title: 'Заголовок'
}

export default OtherRoomsSlider
