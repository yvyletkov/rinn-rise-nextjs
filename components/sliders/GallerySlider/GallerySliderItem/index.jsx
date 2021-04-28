import React, {useState} from 'react'
import s from './style.module.scss'

const GallerySliderItem = ({img, title}) => {
    let [showDescription, setShowDescription] = useState(false)

    return (
        <div onMouseEnter={() => setShowDescription(true)}
             onMouseLeave={() => setShowDescription(false)}
             className={s.photo}>
            <img
                className={s.img}
                src={img}
                alt={title}/>
        </div>
    )
}

export default GallerySliderItem
