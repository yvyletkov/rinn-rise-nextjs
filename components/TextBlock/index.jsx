import React from 'react'
import s from './style.module.scss'
import {LazyLoadImage} from 'react-lazy-load-image-component'
import PropTypes from 'prop-types'

const TextBlock = ({subtitle, title, img, withStarImage, content}) => {

    return <div className={s.wrapper}>
        <div className={s.container}>
            {withStarImage &&
            <div className={s.starImg}>
                <LazyLoadImage
                    effect="br"
                    className={s.img}
                    src="/images/home-page/star.png"
                    alt="Rinn Rise"/>
            </div>}

            <div className={s.content}>
                <p className={s.subtitle}>{subtitle}</p>
                <h2 className={s.title}>
                    {title}
                </h2>
                <div dangerouslySetInnerHTML={{__html: content}}/>
            </div>
            <div className={s.imageWrapper}>
                <LazyLoadImage
                    effect="blur"
                    className={s.img}
                    src={img}
                    layout="fill"/>
            </div>
        </div>
    </div>
}

TextBlock.propTypes = {
    subtitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    withStarImage: PropTypes.bool,
    content: PropTypes.string.isRequired,
}

TextBlock.defaultProps = {
    withStarImage: false,
}


export default TextBlock