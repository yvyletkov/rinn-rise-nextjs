import React, {useState} from 'react'
import s from './style.module.scss'
import AnimatedMouseIcon from '../shared/AnimatedMouseIcon/AnimatedMouseIcon'
import Image from 'next/image'
import useMediaQuery from '../customHooks/useMediaQuery'

const ResortVacationPageBanner = () => {
    const mobile = useMediaQuery('(max-width: 550px)')
    const [showDescription, setShowDescription] = useState(false)
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.textBlock}>
                    <p className={s.text}>Курортный отдых</p>
                    <h1 className={s.title}>Идеальный отдых</h1>
                    <h3 className={s.subtitle}>Для всей семьи</h3>
                </div>
                <div className={s.descriptionWrapper}>
                    <div className={s.toggleDescriptionBtn}>
                        Подробнее →
                    </div>
                    <div className={s.descriptionBlock + showDescription ? s.active : ''}>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi est in ipsam
                            necessitatibus numquam quod similique veniam? Ab architecto, dolore illum, ipsa, magni odit
                            quas repudiandae rerum soluta sunt velit.
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi est in ipsam
                            necessitatibus numquam quod similique veniam? Ab architecto, dolore illum, ipsa, magni odit
                            quas repudiandae rerum soluta sunt velit.
                        </p>
                    </div>

                </div>
                {/*<div className={s.moduleBlock} />*/}
            </div>
            <div className={s.banner}>
                {!mobile ?
                    <Image loading={'eager'} layout={'fill'} src={'/images/home-page/1.jpg'} alt={'Rinn Rise'}/>
                    :
                    <Image loading={'eager'} layout={'fill'} src={'/images/home-page/banner-mobile.jpg'}
                           alt={'Rinn Rise'}/>
                }
            </div>
            <div className={s.animatedMouse}>
                <AnimatedMouseIcon/>
            </div>
        </div>
    )
}

export default ResortVacationPageBanner;