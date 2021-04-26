import s from './style.module.scss'
import React from 'react'
import NextArrow from './NextArrow'
import PropTypes from 'prop-types'


function PrevArrow({positionStyles, onClick}) {
    return (
        <div
            className={s.prevArrow}
            style={{backgroundImage: 'url(/images/slider-arrows/arrow-thin-small-left.png)', ...positionStyles}}
            onClick={onClick}
        />
    )
}

NextArrow.propTypes = {
    positionStyles: PropTypes.object,
    onClick: PropTypes.func
}

export default PrevArrow