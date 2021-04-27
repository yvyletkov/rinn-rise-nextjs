import s from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'

interface ArrowProps {
    positionStyles: object,
    onClick?: any
}

function NextArrow({positionStyles, onClick}: ArrowProps) {
    return (
        <div
            className={s.nextArrow}
            style={{backgroundImage: 'url(/images/slider-arrows/arrow-thin-small-right.png)', ...positionStyles}}
            onClick={onClick}
        />
    )
}

NextArrow.propTypes = {
    positionStyles: PropTypes.object,
    onClick: PropTypes.func
}

export default NextArrow