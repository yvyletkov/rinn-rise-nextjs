import s from './style.module.scss'
import React from 'react'
import PropTypes from 'prop-types'


function NextArrow({positionStyles, onClick}) {
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