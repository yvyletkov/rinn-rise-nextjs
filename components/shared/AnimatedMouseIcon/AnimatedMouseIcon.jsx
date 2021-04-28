import React from 'react'
import s from './AnimatedMouseIcon.module.scss'
import PropTypes from 'prop-types'

const AnimatedMouseIcon = ({black}) => {
    return (
        <span className={s.scrollBtn + ' ' + (black && s.black)}>
                <span className={s.mouse}>
                    <span/>
                </span>
        </span>
    )
};

AnimatedMouseIcon.propTypes = {
    black: PropTypes.bool
}

AnimatedMouseIcon.defaultProps = {
    black: false,
}

export default AnimatedMouseIcon;
