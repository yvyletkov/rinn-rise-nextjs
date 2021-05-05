import s from './style.module.scss'
import Slider from 'react-slick'
import React from 'react'
import HeadlineCenter from '../HeadlineCenter'
import PropTypes from 'prop-types'
import Link from 'next/link'


const DescriptionRoomBlock = ({
                                  title,
                                  icons,
                                  slidesToShow,
                                  link,
                                  description
                              }) => {

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
    }

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
            <div className={s.description} dangerouslySetInnerHTML={{__html: description}}/>
            {link && <Link href={link}><a className={s.button}>Забронировать</a></Link>}

        </div>
    </div>
}

DescriptionRoomBlock.propTypes = {
    title: PropTypes.string.isRequired,
    slidesToShow: PropTypes.number,
    icons: PropTypes.arrayOf(PropTypes.object).isRequired,
    description: PropTypes.string.isRequired,
    link: PropTypes.string
}

DescriptionRoomBlock.defaultProps = {
    icons: []
}

export default DescriptionRoomBlock
