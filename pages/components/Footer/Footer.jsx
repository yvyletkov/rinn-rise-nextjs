import React from 'react';
import s from './Footer.module.scss';
import Link from 'next/link'
import useMediaQuery from '../customHooks/useMediaQuery';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
// import icon from '../../../logo.png';

const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 992px)');

    return (<>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.contactBlock}>
                        <h3 className={s.title}>Контакты</h3>
                        <div className={s.text}>
                            <p>
                                <img src={'/images/footer/address.svg'} alt={'Адрес'}/>
                                ул. Гулаева 6, Джемете, Анапа</p>
                            <p>
                                <img src={'/images/footer/phone.svg'} alt={'Телефон'}/>
                                7 (800) 555-78-56</p>
                            <p>
                                <img src={'/images/footer/email.png'} alt={'Email'}/>
                                email</p>
                        </div>
                        <div className={s.iconsBlock}>
                            <img className={s.icon} src={'/images/footer/inst.png'} alt={'Инстаграм'}/>
                            <img className={s.icon} src={'/images/footer/vk.png'} alt={'Вконтакте'}/>
                        </div>
                    </div>
                    <div className={s.mapWrapper}>
                        <YMaps query={{load: 'control.ZoomControl'}}>
                            <Map width={'100%'}
                                 instanceRef={ref => {
                                     ref && ref.behaviors.disable('scrollZoom') && (isMobile && ref.behaviors.disable('drag'));
                                 }}
                                 height={'100%'}
                                 defaultState={{
                                     center: isMobile ? [44.957467, 37.298769] : [44.956098, 37.303350],
                                     zoom: 16,
                                     controls: ['zoomControl']
                                 }}>
                                <Placemark geometry={[44.957467, 37.298769]}
                                           options={{
                                               iconLayout: 'default#image',
                                               iconImageHref: '/images/logo.png',
                                               iconImageSize: [207, 161],
                                               iconImageOffset: isMobile ? [-80, -100] : [0, 0],
                                           }}
                                />
                            </Map>
                        </YMaps>
                    </div>
                </div>
                <div className={s.footerGray}>
                    <p>Rinn Rise, Джемете, Анапа © 2021 Официальный сайт гостиницы
                        <span className={s.thinLine}>&nbsp; | &nbsp;</span>
                        <a href="https://upro.group/" className={s.managedBy}>Managed by UPRO</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
