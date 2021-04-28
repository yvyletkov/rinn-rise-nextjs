import React, {useEffect} from 'react'
import Slider from 'react-slick'
import s from './style.module.scss'
import RoomsSliderItem from './RoomsSliderItem'
import HeadlineCenter from '../../shared/HeadlineCenter'
import useMediaQuery from '../../shared/customHooks/useMediaQuery'
import NextArrow from '../../shared/SliderArrows/NextArrow'
import PrevArrow from '../../shared/SliderArrows/PrevArrow'
import PropTypes from 'prop-types'

const RoomsSlider = ({
                        slides,
                        title
                    }) => {


    const initialCurrentSlideIndex = useMediaQuery('(min-width: 769px)') ?
        (slides.length >= 5 ? 2 : slides.length === 4 ? 2 : slides.length === 2 ? 1 : slides.length === 3 ? 1 : 0)
        : 0

    let [currentSlideIndex, setCurrentSlideIndex] = React.useState(initialCurrentSlideIndex)

    const items = slides.map((item, index) => {
        const {
            img,
            data
        } = item;
        return (
            <div className="sliderElement" key={index}>
                <RoomsSliderItem
                    img={img}
                    {...data}
                />
            </div>
        )
    })

    const afterChangeHandler = index => setCurrentSlideIndex(index)

    const settings = {
        slidesToShow: 1,
        initialSlide: initialCurrentSlideIndex,
        afterChange: afterChangeHandler,
        dots: false,
        className: 'center',
        centerMode: false,
        infinite: false,
        centerPadding: '60px',
        variableWidth: true,
        speed: 500,
        nextArrow: <NextArrow onClick={() => setCurrentSlideIndex(currentSlideIndex + 1)} positionStyles={{
            bottom: '-90px',
            left: '50%',
            transform: 'translateX(900%)'
        }}/>,
        prevArrow: <PrevArrow onClick={() => setCurrentSlideIndex(currentSlideIndex - 1)} positionStyles={{
            bottom: '-90px',
            left: '50%',
            transform: 'translateX(750%)'
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
                    infinite: false,
                    dots: true,
                    arrows: false
                }
            },
        ]
    }

    useEffect(() => {
        sliderRef.current.slickGoTo(currentSlideIndex)
    }, [currentSlideIndex])

    const sliderRef = React.useRef()

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <HeadlineCenter title={title}/>
                <Slider ref={sliderRef} {...settings}>{items}</Slider>
            </div>

        </div>
    )
}


RoomsSlider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
}

RoomsSlider.defaultProps = {
    slides: [],
    title: 'Заголовок'
}

export default RoomsSlider
