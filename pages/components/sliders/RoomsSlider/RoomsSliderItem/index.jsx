import React from 'react'
import s from './style.module.scss'
import Link from 'next/link'
import Image from 'next/image'


const RoomsSliderItem = ({
                             img,
                             ...data
                         }) => {

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    return (
        <Link onClick={handleLinkClick} href="#">
            <a>
                <div className={s.card}>
                    <div className={s.img}>
                        <Image layout="fill" src={img} alt={''}/>
                    </div>
                    <div className={s.content}>
                        <h6 className={s.title}>
                            Номер
                            <span>Стандарт</span>
                        </h6>
                        <p className={s.text}>
                            {data.text}
                        </p>
                        <Link href={''}>
                            <a className={s.link}>
                                Подробнее <span>→</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </a>
        </Link>
    );

};

export default RoomsSliderItem;
