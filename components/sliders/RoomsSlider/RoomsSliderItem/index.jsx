import React from 'react'
import s from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'
import PropTypes from 'prop-types';

const RoomsSliderItem = ({
                             img,
                             ...data
                         }) => {

    return (
                <div className={s.card}>
                    <div className={s.img}>
                        <Image
                            layout="fill"
                            quality='40'
                            src={img}
                            alt={''}/>
                    </div>
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
    data: PropTypes.object.isRequired,
}

export default RoomsSliderItem;
