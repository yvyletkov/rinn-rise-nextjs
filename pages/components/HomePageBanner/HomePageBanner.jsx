import React from 'react';
import s from './HomePageBanner.module.scss';
import AnimatedMouseIcon from '../shared/AnimatedMouseIcon/AnimatedMouseIcon';

const HomePageBanner = () => {
    return (
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.textBlock}>
                        <img className={s.stars} src={'/images/home-page/stars.png'} alt={'4 звезды'}/>
                        <p className={s.text}>Территория комфорта</p>
                        <h1 className={s.title}>Rinn Rise</h1>
                        <h3 className={s.subtitle}>Джемете, Анапа</h3>
                    </div>
                    <img className={s.banner} src={'/images/home-page/1.jpg'} alt={'Rinn Rise'}/>
                    <img className={s.circlesBlock} src={'/images/home-page/circles.png'} alt={'Круги'} />
                </div>
                <div className={s.animatedMouse}>
                    <AnimatedMouseIcon />
                </div>
            </div>
    )
}

export default HomePageBanner;