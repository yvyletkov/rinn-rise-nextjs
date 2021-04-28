import React, {useState} from 'react'
import s from './style.module.scss'
import Image from 'next/image'

const GallerySliderItem = ({img, title}) => {
    let [showDescription, setShowDescription] = useState(false)

    return (
        <div onMouseEnter={() => setShowDescription(true)}
             onMouseLeave={() => setShowDescription(false)}
             className={s.photo}>
            <Image
                priority
                quality="45"
                layout="fill"
                className={s.img}
                src={img}
                alt={title}/>
        </div>
    )
}

export default GallerySliderItem
