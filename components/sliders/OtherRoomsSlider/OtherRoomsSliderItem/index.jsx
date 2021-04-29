import React from 'react';
import s from './CenteredSliderItem.module.scss';
import capacityImg from './../../../../../img/room-page/capacity-white.png';
import areaImg from './../../../../../img/room-page/ploshchad-white.png';
import {NavLink} from 'react-router-dom';
import LazyLoadImgComponent from '../../../../additional/LazyLoadImgComponent/LazyLoadImgComponent';


const OtherRoomsSliderItem = (props) => {
    const {
        img,
        link,
        title,
        subtitle,
        time,
        date,
        campus,
        campusName,
        type = 'home-page',
        subsubtitle,
        fontsizeSubsubtitle,
        active,
        capacity,
        area,
        desaturated
    } = props;

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    switch (type) {
        case 'home-page':
            return (
                <div className={active ? s.card + ' ' + s.active : s.card}>
                    <NavLink onClick={handleLinkClick} to={link ? link : '#'}>
                        {link && <p className={s.link}>Подробнее →</p>}
                        <img className={s.img} style={desaturated ? {filter: 'saturate(0)'} : {}} src={img}
                             alt={title}/>
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
                    </NavLink>
                </div>
            );
        case 2 :
            return (
                <div className={active ? s.card + ' ' + s.active : s.card}>
                    <img className={s.img} src={img} alt={title}/>
                    <div className={s.content}>
                        <p className={s.title}>{title}</p>
                        <p className={s.subtitle1}>{subtitle}</p>
                        <p className={s.subsubtitle} style={{fontSize: fontsizeSubsubtitle}}>{subsubtitle}</p>
                    </div>
                </div>
            );
        case 'room' :
            return (
                <div className={active ? s.card + ' ' + s.active : s.card}>
                    <NavLink onClick={handleLinkClick} to={link ? link : '#'}>
                        <img className={s.img} src={img} alt={title}/>
                        <div className={s.content}>
                            <p className={s.roomSubtitle}>{subtitle}</p>
                            <p className={s.roomTitle}>{title}</p>

                            <div className={s.imgContainer}>
                                <img src={areaImg} alt="Площадь номера"/>
                                {area} м<sup>2</sup>
                            </div>

                            <div className={s.imgContainer}>
                                <img src={capacityImg} alt="Вместимость"/>
                                {capacity}
                            </div>
                        </div>
                    </NavLink>
                </div>
            );
        default :
            return null
    }

};

export default OtherRoomsSliderItem
