import React from 'react'
import Slider from 'react-slick'
import s from './style.module.scss'
import RoomsSliderItem from './RoomsSliderItem'
import HeadlineCenter from '../../HeadlineCenter'
import useMediaQuery from '../../customHooks/useMediaQuery'
import NextArrow from '../../SliderArrows/NextArrow';
import PrevArrow from '../../SliderArrows/PrevArrow';

const initialSlides = [
    {
        img: '/images/1.jpg',
        data: {
            text: 'Уютный однокомнатный номер с двумя раздельными кроватями или одной большой кроватью.'
        }
    },
    {
        img: '/images/1.jpg',
        data: {
            text: 'Уютный однокомнатный номер с большой кроватью.'
        }
    },
    {
        img: '/images/1.jpg',
        data: {
            text: 'Уютный однокомнатный номер с большой кроватью.'
        }
    },
    {
        img: '/images/1.jpg',
        data: {
            text: 'Уютный однокомнатный номер с большой кроватью.'
        }
    },
    {
        img: '/images/1.jpg',
        data: {
            text: 'Уютный однокомнатный номер с большой кроватью.'
        }
    },
]

const RoomsSlider = ({
                        title = 'Какой-то заголовок',
                        slides = initialSlides,
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

    React.useEffect(() => {
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

export default RoomsSlider
