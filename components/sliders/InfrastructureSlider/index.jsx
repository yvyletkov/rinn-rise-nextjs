import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import s from './style.module.scss'
import PrevArrow from '../../SliderArrows/PrevArrow'
import NextArrow from '../../SliderArrows/NextArrow'
import cx from 'classnames'
import useMediaQuery from '../../customHooks/useMediaQuery'
import HeadlineCenter from '../../HeadlineCenter'
import InfrastructureSliderItem from './InfrastructureSliderItem'
import PropTypes from 'prop-types'

const InfrastructureSlider = ({
                                  slides,
                                  title,
                                  titleMobile,
                              }) => {

    const settings = {
        infinite: true,
        slidesToShow: slides.length === 1 ? 1 : 3,
        centerMode: true,
        arrows: false,
        variableWidth: true,
        nextArrow: <NextArrow positionStyles={{
            bottom: '-20px',
            right: '50%',
            transform: 'translateX(120%)'
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '-20px',
            left: '50%',
            transform: 'translateX(-120%)'
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
    }

    const mobile = useMediaQuery('(max-width: 700px)')
    const [activeSlideIndex, setActiveSlideIndex] = useState()
    const [items, setItems] = useState([])

    useEffect(() => {
        setActiveSlideIndex(mobile ? null : null) //  можно задать номер активного слайда на мобилке и на десктопе
    }, [mobile]);
    
    useEffect(() => {
        setItems(slides.map((item, index) => {
            const {img, title, description} = item
            return (
                <div className="SliderElement" key={index}>
                    <InfrastructureSliderItem
                        index={index}
                        img={img}
                        title={title}
                        description={description}
                        setActive={setActiveSlideIndex}
                        active={index === activeSlideIndex}
                    />
                </div>
            )
        }))
    }, [activeSlideIndex])

    const containerStyles = cx(s.container, {[s.small]: slides.length === 1})

    return (
        <div className={s.wrapper}>
            <div className={containerStyles}>
                <HeadlineCenter
                    title={useMediaQuery('(max-width: 490px)') ? (titleMobile || title) : title}/>
                <Slider {...settings}>{items}</Slider>
            </div>
        </div>
    )
}

InfrastructureSlider.propTypes = {
    slides: PropTypes.arrayOf(PropTypes.object).isRequired,
    title: PropTypes.string.isRequired,
    titleMobile: PropTypes.string,
    initialSlideIndex: PropTypes.number
}

InfrastructureSlider.defaultProps = {
    slides: [],
}

export default InfrastructureSlider
