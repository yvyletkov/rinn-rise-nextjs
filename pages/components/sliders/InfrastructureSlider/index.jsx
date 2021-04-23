import React, {useEffect, useState} from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import s from './style.module.scss'
import PrevArrow from '../../SliderArrows/PrevArrow'
import NextArrow from '../../SliderArrows/NextArrow';
import cx from 'classnames'
import useMediaQuery from '../../customHooks/useMediaQuery'
import HeadlineCenter from '../../HeadlineCenter'

const InfrastructureSliderItem = ({
                                      img,
                                      title,
                                      description,
                                      active,
                                      setActive,
                                      index
                                  }) => {

    const classNames = cx([s.card], {[s.active]: active})

    const handleClick = () => {
        setActive(active ? null : index)
    }

    return (
        <div className={classNames}>

            <div className={s.img}>
                <Image layout="fill"
                       src={img} alt=""/>
            </div>

            <div className={s.content}>
                <h6 className={s.title} dangerouslySetInnerHTML={{__html: title}}/>

                <div className={s.description}>
                    <p dangerouslySetInnerHTML={{__html: description}}
                       style={useMediaQuery('(max-width: 490px)')?{}:{marginBottom: '10px'}}/>
                </div>

                <div className={s.moreBtn} onClick={handleClick}>
                    {active ? 'Cкрыть' : 'Подробнее'}
                </div>

            </div>


        </div>)
}

const InfrastructureSlider = ({
                                  slides = [],
                                  title,
                                  titleMobile,
                                  initialSlideIndex = 0,
                              }) => {

    const settings = {
        initialSlide: initialSlideIndex,
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

    const [activeSlideIndex, setActiveSlideIndex] = useState(1)
    const [items, setItems] = useState([])

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

export default InfrastructureSlider
