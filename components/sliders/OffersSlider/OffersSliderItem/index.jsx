import React from 'react'
import s from './style.module.scss'
import cx from 'classnames'
import Image from 'next/image'
import PropTypes from 'prop-types';

const OffersSliderItem = ({
                              img,
                              active,
                              title,
                              subtitle,
                              link,
                              oneLine,
                          }) => {

    let [lifted, setLifted] = React.useState(active);

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    const cardClassNames = cx(s.card, {
        [s.lifted]: lifted,
        [s.noLink]: !link,
        [s.small]: oneLine,
    });

    return (
        <div className={s.cardWrapper}>
            <div
                className={cardClassNames}
                onMouseEnter={() => !window.matchMedia('screen and (max-width: 1200px)').matches ? setLifted(true) : null}
                onMouseLeave={() => !window.matchMedia('screen and (max-width: 1200px)').matches ? setLifted(false) : null}>
                <Image
                    layout={'responsive'}
                    height={'150%'}
                    quality='20'
                    width={'100%'}
                    className={s.img}
                    src={img}
                    alt="Афиша"/>
                <div className={s.content}>
                    <p dangerouslySetInnerHTML={{__html: subtitle}} className={s.subtitle}/>
                    <p dangerouslySetInnerHTML={{__html: title}} className={s.title}/>
                    {link && <div>Подробнее →</div>}
                </div>
            </div>
        </div>)
}


OffersSliderItem.propTypes = {
    img: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    link: PropTypes.string,
    oneLine: PropTypes.bool,
}

export default OffersSliderItem
