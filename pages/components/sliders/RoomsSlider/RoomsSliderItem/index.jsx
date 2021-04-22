import React from 'react'
import s from './style.module.scss'
import Link from 'next/link'


const RoomsSlider = ({
                         img,
                         link,
                         title,
                         subtitle,
                         time,
                         date,
                         campus,
                         campusName,
                         active,

                     }) => {

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    return (
        <div className={active ? s.card + ' ' + s.active : s.card}>
            <Link onClick={handleLinkClick} href={link ? link : '#'}>
                {link && <p className={s.link}>Подробнее →</p>}
                <img className={s.img} src={img} alt={title}/>
                <div className={s.content}>
                    <p className={s.title}>{title}</p>
                    <p dangerouslySetInnerHTML={{__html: subtitle}} className={s.subtitle}
                       style={!time ? {marginBottom: '20px'} : {}}/>
                    {time && <p className={s.time}>{time}
                        <span>{date}</span></p>}
                    <p dangerouslySetInnerHTML={{__html: campus}} className={s.campus}>
                    </p>
                    <div dangerouslySetInnerHTML={{__html: campusName}}/>
                </div>
            </Link>
        </div>
    );

};

export default RoomsSlider;
