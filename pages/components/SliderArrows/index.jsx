import s from "./style.module.scss";
// import rightArrowImg from "/images/slider-arrows/arrow-thin-small-right.png";
// import leftArrowImg from "/images/slider-arrows/arrow-thin-small-left.png";
import React from "react";

export function NextArrow({style, positionStyles, onClick}) {
    return (
        <div
            className={s.nextArrow}
            style={{...style, backgroundImage: 'url(/images/slider-arrows/arrow-thin-small-right.png)', ...positionStyles}}
            onClick={onClick}
        />
    );
}

export function PrevArrow({style, positionStyles, onClick}) {
    return (
        <div
            className={s.prevArrow}
            style={{...style, backgroundImage: 'url(/images/slider-arrows/arrow-thin-small-left.png)', ...positionStyles}}
            onClick={onClick}
        />
    );
}