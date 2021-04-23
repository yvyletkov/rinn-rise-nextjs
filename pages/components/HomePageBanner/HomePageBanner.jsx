import React from 'react';
import s from './HomePageBanner.module.scss';
import AnimatedMouseIcon from '../shared/AnimatedMouseIcon/AnimatedMouseIcon';
import Image from 'next/image';

const HomePageBanner = () => {
    return (
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.textBlock}>
                        <div className={s.stars}>
                            <Image layout={'fill'} src={'/images/home-page/stars.png'} alt={'4 звезды'}/>
                        </div>
                        <p className={s.text}>Территория комфорта</p>
                        <h1 className={s.title}>Rinn Rise</h1>
                        <h3 className={s.subtitle}>Джемете, Анапа</h3>
                    </div>
                    <div className={s.banner}>
                        <Image layout={'fill'} src={'/images/home-page/1.jpg'} alt={'Rinn Rise'}/>
                    </div>
                    <img className={s.circlesBlock} src={'/images/home-page/circles.png'} alt={'Круги'} />
                    <div className={s.moduleBlock} />
                </div>
                <div className={s.animatedMouse}>
                    <AnimatedMouseIcon />
                </div>
            </div>
    )
}

export default HomePageBanner;