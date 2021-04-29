import React from 'react'
import s from './style.module.scss'
import Link from 'next/link'
import PropTypes from 'prop-types'
import {LazyLoadImage} from 'react-lazy-load-image-component';

const OtherRoomsSliderItem = ({
                                  img,
                                  link,
                                  title,
                                  active,
                                  capacity,
                                  desc,
                                  area,
                              }) => {

    return (
        <div className={active ? s.card + ' ' + s.active : s.card}>
            <Link href={link}>
                <a>
                    <LazyLoadImage effect={'blur'} wrapperClassName={s.img} src={img} alt={title}/>
                    <div className={s.content}>
                        <p className={s.roomSubtitle}>Номер</p>
                        <p className={s.roomTitle}>{title}</p>
                        <p className={s.desc}>{desc}</p>
                        <div className={s.imgContainer}>
                            <img src="/images/rooms/area.webp" alt="Площадь номера"/>
                            {area} м&sup2;
                        </div>

                        <div className={s.imgContainer}>
                            <img src="/images/rooms/capacity.webp" alt="Вместимость"/>
                            {capacity}
                        </div>
                    </div>
                </a>
            </Link>
        </div>
    );
};

OtherRoomsSliderItem.propTypes = {
    img: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    capacity: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    area: PropTypes.string.isRequired,
}

export default OtherRoomsSliderItem
