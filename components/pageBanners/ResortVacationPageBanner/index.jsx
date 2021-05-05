import {useState} from 'react'
import s from './style.module.scss'
import AnimatedMouseIcon from '../../shared/AnimatedMouseIcon/AnimatedMouseIcon'
import useMediaQuery from '../../shared/customHooks/useMediaQuery'

const ResortVacationPageBanner = () => {
    const mobile = useMediaQuery('(max-width: 550px)', true)
    const [showDescription, setShowDescription] = useState(false)
    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.content}>
                    <div className={s.heading}>
                        <p className={s.text}>Курортный отдых</p>
                        <h1 className={s.title}>Идеальный <span>отдых</span></h1>
                        <h3 className={s.subtitle}>Для всей семьи</h3>
                    </div>
                    <div className={s.descriptionWrapper}>
                        <div className={s.toggleDescriptionBtn} onClick={() => setShowDescription(status => !status)}>
                            Подробнее →
                        </div>
                        <div className={s.descriptionBlock + (showDescription ? (' ' + s.active) : '')}>
                            <p>
                                Подарите себе и своим близким незабываемый отпуск в отеле Rinn Rise! Качественный сервис, современный дизайн номеров, большая зеленая территория с прогулочной зоной и бассейн создадут атмосферу уюта, комфорта и уединенности. А для наших маленьких гостей есть детская игровая площадка и анимационные программы.
                            </p>
                        </div>

                    </div>
                </div>
                {/*<div className={s.moduleBlock} />*/}
            </div>
            <div className={s.banner}>
                <picture>
                    <source srcSet={mobile ? '/images/resort-vacation/banner-mobile.webp' : '/images/resort-vacation/banner.webp'} type='image/webp'/>
                    <img style={{width: '100%', height: '100%'}}
                         src={mobile ? '/images/resort-vacation/banner-mobile.jpg' : '/images/resort-vacation/banner.jpg'}
                         alt={'Rinn Rise'}/>
                </picture>
            </div>
            <div className={s.animatedMouse}>
                <AnimatedMouseIcon/>
            </div>
        </div>
    )
}

export default ResortVacationPageBanner;