import React from 'react'
import s from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types'
import { LazyLoadImage } from 'react-lazy-load-image-component'


const RoomsSliderItem = ({
                             img,
                             ...data
                         }) => {

    return (
                <div className={s.card}>

                        <LazyLoadImage
                            effect='blur'
                            wrapperClassName={s.img}
                            src={img}
                            alt={data.title}/>

                    <div className={s.content}>
                        <h6 className={s.title}>
                            Номер
                            <span>{data.title}</span>
                        </h6>
                        {data.additional && <p className={s.additionalInfo}>{data.additional}</p>}
                        <p className={s.text}>
                            {data.text}
                        </p>
                    </div>
                    <Link href={'/'}>
                        <a className={s.link}>
                            Подробнее <span>→</span>
                        </a>
                    </Link>
                </div>
    )
}


RoomsSliderItem.propTypes = {
    img: PropTypes.string.isRequired,
    data: PropTypes.object,
}

export default RoomsSliderItem;
