import React from 'react';
import s from './Footer.module.scss';
import Link from 'next/link'
import useMediaQuery from '../customHooks/useMediaQuery';
import {Map, Placemark, YMaps} from 'react-yandex-maps';
import Image from 'next/image';

const Footer = () => {
    const isMobile = useMediaQuery('(max-width: 992px)');

    return (
        <div className={s.wrapper}>
            <div className={s.container}>
                <div className={s.mapWrapper}>
                    <YMaps preload={false} query={{load: 'control.ZoomControl'}}>
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
                                           iconImageSize: isMobile ? [140, 100] : [207, 161],
                                           iconImageOffset: isMobile ? [-65, -100] : [0, 0],
                                       }}
                            />
                        </Map>
                    </YMaps>
                </div>
                <div className={s.contactBlock}>
                    <h3 className={s.title}>Контакты</h3>
                    <div className={s.contacts}>
                        <div className={s.item}>
                            <Image width={'16px'}
                                   height={'21px'}
                                   objectFit={'contain'}
                                   src={'/images/footer/address.png'}
                                   alt={'Адрес'}/>
                            <p>ул. Гулаева 6, Джемете, Анапа</p>
                        </div>
                        <div className={s.item}>
                            <Image width={'16px'}
                                   height={'21px'}
                                   objectFit={'contain'}
                                   src={'/images/footer/phone.svg'}
                                   alt={'Телефон'}/>
                            <p>7 (800) 555-78-56</p>
                        </div>
                        <div className={s.item}>
                            <Image width={'16px'}
                                   height={'21px'}
                                   objectFit={'contain'}
                                   src={'/images/footer/email.png'}
                                   alt={'Email'}/>
                            <p>reservation@rinnrise.ru</p>
                        </div>
                    </div>
                    <div className={s.iconsBlock}>
                        <div className={s.icon}>
                            <Image layout={'fill'} src={'/images/footer/inst.png'} alt={'Инстаграм'}/>
                        </div>
                        <div className={s.icon}>
                            <Image layout={'fill'} src={'/images/footer/vk.png'} alt={'Вконтакте'}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className={s.footerGray}>
                <p>Rinn Rise, Джемете, Анапа © 2021 Официальный сайт гостиницы
                    <span className={s.thinLine}>&nbsp; | &nbsp;</span>
                    <a href="https://upro.group/" className={s.managedBy}>Managed by UPRO</a>
                </p>
            </div>
        </div>
    );
};

export default Footer;
