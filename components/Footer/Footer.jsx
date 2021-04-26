import React from "react";
import s from "./Footer.module.scss";
import Link from 'next/link'
import useMediaQuery from '../customHooks/useMediaQuery';
import {Map, Placemark, YMaps} from 'react-yandex-maps';

function NoIndex(props) {
    return (
        <span>
          <span dangerouslySetInnerHTML={{__html: '<!--noindex-->'}}/>
                {props.children}
          <span dangerouslySetInnerHTML={{__html: '<!--/noindex-->'}}/>
        </span>
    );
}

const Footer = () => {
    return (<>
            <div className={s.wrapper}>
                <div className={s.container}>
                    <div className={s.mapWrapper}>
                        <YMaps query={{ load: 'control.ZoomControl' }}>
                            <Map width={'100%'}
                                 instanceRef={ref => {
                                     ref && ref.behaviors.disable('scrollZoom') && ref.behaviors.disable('drag');
                                 }}
                                 height={'100%'}
                                 defaultState={{ center: [44.957467, 37.298769], zoom: 16, controls: ['zoomControl']}}
                                 options={{ balloonContentLayout: '<h3>Hello from custom template!</h3>' }}>
                                <Placemark geometry={[44.957467, 37.298769]} />
                            </Map>
                        </YMaps>
                    </div>
                </div>
                <div className={s.footerGray}>
                    <p>Rinn Rise, Джемете, Анапа © 2021 Официальный сайт гостиницы
                        <span className={s.thinLine}>&nbsp; | &nbsp;</span>
                        <a href='https://upro.group/' className={s.managedBy}>Managed by UPRO</a>
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
