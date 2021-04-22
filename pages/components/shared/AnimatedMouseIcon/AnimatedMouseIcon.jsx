import React from "react";
import s from "./AnimatedMouseIcon.module.scss";

const AnimatedMouseIcon = ({black = false}) => {
    return (
        <span className={s.scrollBtn + ' ' + (black && s.black)}>
                <span className={s.mouse}>
                    <span/>
                </span>
        </span>
    )
};

export default AnimatedMouseIcon;
