import React from 'react'
import s from './style.module.scss'
import Image from 'next/image'

const TextBlock = (props) => {

    return <div className={s.wrapper}>
        <div className={s.container}>
            <div className={s.starImg}>
                <Image src='/images/home-page/star.png' layout='fill'/>
            </div>
            <div className={s.content}>
                <p className={s.subtitle}>Добро пожаловать</p>
                <h2 className={s.title}>
                    Безупречный отдых для всей семьи
                </h2>
                <p className={s.text}>
                    Rinn Rise - новый современный отель, распахнувший свои двери для гостей в 2021 году. Отель
                    расположен в живописном курортном поселке Джемете на солнечном Черноморском побережье недалеко от
                    города Анапа. Джемете славится своими широкими песчаными пляжами и чистым морем с пологим дном.
                    Более того, идеальный климат, теплое море и солёный морской воздух благоприятно влияют на здоровье
                    отдыхающих.
                </p>
                <p className={s.text}>
                    Наш отель имеет все необходимое для комфортного отдыха всей семьей: собственную закрытую территорию
                    с озеленением, 5 трехэтажных корпусов с разными категориями номеров, ресторан и свой бассейн.
                    Песчаный пляж и море находятся всего в 7-10 минутах ходьбы. Высококлассный сервис и идеальное
                    расположение сделают ваш отдых у нас незабываемым!

                </p>
            </div>
            <div className={s.imageWrapper}>
                <div className={s.img}>
                    <Image quality='50' src="/images/home-page/text-block.jpg" layout="fill"/>
                </div>
            </div>
        </div>
    </div>
}

export default TextBlock