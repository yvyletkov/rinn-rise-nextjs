import React from 'react'
import s from './style.module.scss'
import PropTypes from 'prop-types'

const HeadlineCenter = ({title, style}) => {
    return <h2 style={style} className={s.headlineCenter}>{title}</h2>
}

HeadlineCenter.propTypes = {
    title: PropTypes.string.isRequired,
    style: PropTypes.object
}

export default HeadlineCenter;


