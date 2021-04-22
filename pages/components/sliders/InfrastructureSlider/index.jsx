import React from 'react'
import Slider from 'react-slick'
import Image from 'next/image'
import s from './style.module.scss'
import PrevArrow from '../../SliderArrows/PrevArrow'
import NextArrow from '../../SliderArrows/NextArrow';
import cx from 'classnames'
import useMediaQuery from '../../customHooks/useMediaQuery'
import HeadlineCenter from '../../HeadlineCenter'

const InfrastructureSliderItem = (props) => {
    const {img, title, description, active} = props

    let [showDescr, setShowDescr] = React.useState(active)

    let classNames = cx([s.card], {[s.active]: showDescr})

    return (
        <div className={classNames}>

            <div className={s.imgWrapper}>
                <Image layout="fill" className={s.img}
                       src={img} alt=""/>
            </div>

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


        </div>)
}

const InfrastructureSlider = ({
                                  slides,
                                  title,
                                  // titleMobile,
                                  initialSlideIndex = 0,
                                  // manySlides = false,
                              }) => {

    const settings = {
        initialSlide: initialSlideIndex,
        infinite: true,
        slidesToShow: slides !== undefined && (slides.length === 1 ? 1 : 3),
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

    const items = slides !== undefined && slides.map((item, index) => {
            const {img, title, description, popupData, imgHeight} = item
            return (
                <div className="SliderElement" key={index}>
                    <InfrastructureSliderItem
                        img={img}
                        title={title}
                        description={description}
                        active={useMediaQuery('(max-width: 490px)') ? false : index === 1}
                    />
                </div>
            )
        });

    const containerStyles = cx(s.container, {[s.small]: slides !== undefined && slides.length === 1})

    return (
        <div className={s.wrapper}>
            <div className={containerStyles}>

                {(useMediaQuery('(max-width: 480px)') &&  slides !== undefined && slides.length === 1) &&
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


                <Slider {...settings}>{items}</Slider>

            </div>
        </div>
    )
}

export default InfrastructureSlider
