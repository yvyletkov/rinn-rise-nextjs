// import React from 'react'
import s from './style.module.scss'
import cx from 'classnames'
import PropTypes from 'prop-types'


const CircleTip = ({accordionStatus, onClick, style, visibleOnDesktop = false}) => {

    const cn = cx(s.cirqleTip, {[s.active]: accordionStatus, [s.forDesktop]: visibleOnDesktop})
    return <span style={style} className={cn}
                 onClick={onClick}>
        <p>!</p>
    </span>
}

CircleTip.propTypes = {
    accordionStatus: PropTypes.bool.isRequired,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
    visibleOnDesktop: PropTypes.bool
}

export default CircleTip