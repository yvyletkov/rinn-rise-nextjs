import s from './style.module.scss'
import Slider from 'react-slick'
import React from 'react'
import HeadlineCenter from '../../shared/HeadlineCenter'
import NextArrow from '../../shared/SliderArrows/NextArrow'
import PrevArrow from '../../shared/SliderArrows/PrevArrow'


const AdvantagesSlider = ({slides}) => {

    const settings = {
        infinite: false,
        slidesToShow: 4,
        nextArrow: <NextArrow positionStyles={{
            bottom: '-50px',
            right: '50%',
            transform: 'translateX(120%)'
        }}/>,
        prevArrow: <PrevArrow positionStyles={{
            bottom: '-50px',
            left: '50%',
            transform: 'translateX(-120%)'
        }}/>,
        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    variableWidth: true,
                    slidesToShow: 1,
                    dots: true,
                    arrows: false,
                }
            },
        ]
    };

    const items = slides.map((item, idx) => {
        return (
            <div key={idx} className={s.sliderItemWrapper}>
                <img src={item.img} alt={''}/>
                <h5>{item.title}</h5>
                <p dangerouslySetInnerHTML={{__html: item.text}}/>
            </div>
        )
    })

    return <div id="places" className={s.wrapper}>
        <div className={s.container}>
            <HeadlineCenter style={{marginBottom: 0}} title={'Преимущества'}/>
            <div className={s.sliderWrapper}>
                <Slider {...settings} slidesToShow={4}>
                    {items}
                </Slider>
            </div>

        </div>
    </div>
};

export default AdvantagesSlider;
