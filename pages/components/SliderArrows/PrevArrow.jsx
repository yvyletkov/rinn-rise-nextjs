import s from "./style.module.scss";
// import rightArrowImg from "/images/slider-arrows/arrow-thin-small-right.png";
// import leftArrowImg from "/images/slider-arrows/arrow-thin-small-left.png";
import React from "react";

function PrevArrow({style, positionStyles, onClick}) {
    return (
        <div
            className={s.prevArrow}
            style={{...style, backgroundImage: 'url(/images/slider-arrows/arrow-thin-small-left.png)', ...positionStyles}}
            onClick={onClick}
        />
    );
}

export default PrevArrow