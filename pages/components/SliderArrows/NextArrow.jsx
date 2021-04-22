import s from './style.module.scss';
import React from 'react';

function NextArrow({style, positionStyles, onClick}) {
    return (
        <div
            className={s.nextArrow}
            style={{...style, backgroundImage: 'url(/images/slider-arrows/arrow-thin-small-right.png)', ...positionStyles}}
            onClick={onClick}
        />
    );
}

export default NextArrow