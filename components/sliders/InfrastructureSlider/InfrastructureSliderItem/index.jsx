import React from 'react'
import Image from 'next/image'
import s from './style.module.scss'
import cx from 'classnames'
import useMediaQuery from '../../../customHooks/useMediaQuery'
import PropTypes from 'prop-types';
import InfrastructureSlider from '../index';

const InfrastructureSliderItem = ({
                                      img,
                                      title,
                                      description,
                                      active,
                                      setActive,
                                      index
                                  }) => {

    const classNames = cx([s.card], {[s.active]: active})

    const handleClick = () => {
        setActive(active ? null : index)
    }

    return (
        <div className={classNames}>

            <div className={s.img}>
                <Image layout="fill"
                       src={img} alt=""/>
            </div>

            <div className={s.content}>
                <h6 className={s.title} dangerouslySetInnerHTML={{__html: title}}/>

                <div className={s.description}>
                    <p dangerouslySetInnerHTML={{__html: description}}
                       style={useMediaQuery('(max-width: 490px)')?{}:{marginBottom: '10px'}}/>
                </div>

                <div className={s.moreBtn} onClick={handleClick}>
                    {active ? 'Скрыть' : 'Подробнее'}
                </div>

            </div>

        </div>)
}

InfrastructureSliderItem.propTypes = {
    img: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    setActive: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
}

export default InfrastructureSliderItem
