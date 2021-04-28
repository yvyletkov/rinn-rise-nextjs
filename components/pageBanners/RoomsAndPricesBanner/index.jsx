import React from 'react'
import s from './style.module.scss'
import AnimatedMouseIcon from '../../shared/AnimatedMouseIcon/AnimatedMouseIcon'
import useMediaQuery from '../../shared/customHooks/useMediaQuery'

const RoomsAndPricesBanner = () => {
    const mobile = useMediaQuery('(max-width: 550px)')
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.textBlock}>
                    <div className={s.stars}>
                        <img src={'/images/home-page/stars.png'} alt={'4 звезды'}/>
                    </div>
                    <p className={s.text}>Номера и цены</p>
                    <h1 className={s.title}>Размещение</h1>
                    <h3 className={s.subtitle}>в отеле Rinn Rise</h3>
                </div>
                <img className={s.circlesBlock} src={'/images/home-page/circles.png'} alt={'Круги'}/>
                {/*<div className={s.moduleBlock} />*/}
            </div>
            <div className={s.banner}>
                <picture>
                    <source srcSet='/images/rooms/1.webp' type='image/webp'/>
                    <img style={{width: '100%', height: '100%'}} src={'/images/rooms/1.jpg'} alt={'Номера и цены'}/>
                </picture>
            </div>
            <div className={s.animatedMouse}>
                <AnimatedMouseIcon/>
            </div>
        </div>
    )
}

export default RoomsAndPricesBanner