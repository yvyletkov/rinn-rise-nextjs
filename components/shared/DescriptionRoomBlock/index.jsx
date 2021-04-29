import s from './style.module.scss'
import Slider from 'react-slick'
import React from 'react'
import HeadlineCenter from '../HeadlineCenter'
import PropTypes from 'prop-types'

const DescriptionRoomBlock = ({title, icons, slidesToShow}) => {

    const settings = {
        infinite: false,
        slidesToShow: slidesToShow || icons.length,
        arrows: true,
        dots: false,
        responsive: [
            {
                breakpoint: 500,
                settings: {
                    arrows: false,
                    variableWidth: true,
                    slidesToShow: 1,
                    dots: true,
                }
            },
        ]
    };

    return <div className={s.wrapper}>
        <div className={s.container}>
            <HeadlineCenter title={title}/>

            <div className={s.sliderWrapper}>
                <Slider {...settings}>
                    {icons.map((item, index) => {
                        return <div key={index} className={s.iconWrapper}>
                            <img className={s.icon} src={item.img} alt=""/>
                            <p className={s.text} dangerouslySetInnerHTML={{__html: item.text}}/>
                        </div>
                    })}
                </Slider>
            </div>
            <p className={s.textDesc}><b>Оснащение номера:</b> один балкон с видом на задний фасад здания, второй балкон с видом на площадь с
                фонтаном, 2 ТВ – один в спальне, другой в гостиной, бесплатный Wi-Fi, бесплатная парковка, мебель на
                балконе, тапочки, сейф, холодильник, индивидуальное кондиционирование, расширенный набор банных
                принадлежностей, сервиз, чайная станция.
            </p>
            <p className={s.textDesc}>Просторный двухкомнатный номер. В номере одна большая спальня и просторная гостиная комната. Каждый
                номер оснащен современной мебелью , также в номере есть собственная ванная комната с душем и
                расширенным набором банных принадлежностей, тапочки, кондиционер, 2 телевизора, мини-бар, сейф,
                чайная станция, сервиз. Есть 2 собственных балкона с мебелью.
            </p>
            <div className={s.button}>Забронировать</div>
        </div>
    </div>
};

DescriptionRoomBlock.propTypes = {
    title: PropTypes.string.isRequired,
    slidesToShow: PropTypes.number,
    icons: PropTypes.arrayOf(PropTypes.object).isRequired
}

DescriptionRoomBlock.defaultProps = {
    icons: []
}

export default DescriptionRoomBlock
