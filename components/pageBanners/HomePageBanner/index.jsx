import React from 'react'
import s from './style.module.scss'
import AnimatedMouseIcon from '../../shared/AnimatedMouseIcon/AnimatedMouseIcon'
import useMediaQuery from '../../shared/customHooks/useMediaQuery'

const HomePageBanner = () => {
    const mobile = useMediaQuery('(max-width: 550px)')
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.textBlock}>
                    <div className={s.stars}>
                        <img src={'/images/home-page/stars.png'} alt={'4 звезды'}/>
                    </div>
                    <p className={s.text}>Территория комфорта</p>
                    <h1 className={s.title}>Rinn Rise</h1>
                    <h3 className={s.subtitle}>Джемете, Анапа</h3>
                </div>
                <img className={s.circlesBlock} src={'/images/home-page/circles.png'} alt={'Круги'}/>
                {/*<div className={s.moduleBlock} />*/}
            </div>
            <div className={s.banner}>
                <picture>
                    <source srcSet={mobile ? '/images/home-page/banner-mobile.webp' : '/images/home-page/banner.webp'} type='image/webp'/>
                    <img style={{width: '100%', height: '100%'}}
                         src={mobile ? '/images/home-page/banner-mobile.jpg' : '/images/home-page/banner.jpg'}
                         alt={'Rinn Rise'}/>
                </picture>
            </div>
            <div className={s.animatedMouse}>
                <AnimatedMouseIcon/>
            </div>
        </div>
    )
}

export default HomePageBanner