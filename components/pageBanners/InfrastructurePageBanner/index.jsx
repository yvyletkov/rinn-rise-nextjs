import React from 'react'
import s from './style.module.scss'
import AnimatedMouseIcon from '../../shared/AnimatedMouseIcon/AnimatedMouseIcon'
import useMediaQuery from '../../shared/customHooks/useMediaQuery'

const InfrastructurePageBanner = () => {
    const mobile = useMediaQuery('(max-width: 550px)', true)
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.textBlock}>
                    <div className={s.stars}>
                        <img src={'/images/home-page/stars.png'} alt={'4 звезды'}/>
                    </div>
                    <p className={s.text}>Территория комфорта</p>
                    <h1 className={s.title}>Инфраструктура</h1>
                    <h3 className={s.subtitle}>Джемете, Анапа</h3>
                </div>
                <img className={s.circlesBlock} src={'/images/home-page/circles.png'} alt={'Круги'}/>
                {/*<div className={s.moduleBlock} />*/}
            </div>
            <div className={s.banner}>
                <picture>
                    <source srcSet={mobile ? '/images/infrastructure/banner-mobile.webp' : '/images/infrastructure/banner.webp'} type='image/webp'/>
                    <img style={{width: '100%', height: '100%'}}
                         src={mobile ? '/images/infrastructure/banner-mobile.jpg' : '/images/infrastructure/banner.jpg'}
                         alt={'Rinn Rise'}/>
                </picture>
            </div>
            <div className={s.animatedMouse}>
                <AnimatedMouseIcon/>
            </div>
        </div>
    )
}

export default InfrastructurePageBanner