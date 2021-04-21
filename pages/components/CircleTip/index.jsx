import React from "react";
import s from "./style.module.scss";
import cx from 'classnames';

const CircleTip = ({accordeonStatus, onClick, style, forDesktop = false}) => {

    const cn = cx(s.cirqleTip, {[s.active]: accordeonStatus, [s.forDesktop]: forDesktop})
    return <span style={style} className={cn}
                 onClick={onClick}>
        <p>!</p>
    </span>
}

export default CircleTip;