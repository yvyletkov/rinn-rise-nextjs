import React from "react";
import s from "./style.module.scss";
import cx from "classnames";
import Image from 'next/image';

const OffersSliderItem = (props) => {
    const {img, active, title, subtitle, link, decolorized, oneLine, smallText} = props;

    let [lifted, setLifted] = React.useState(active);

    const handleLinkClick = (e) => {
        if (!link) e.preventDefault()
    }

    const cardClassNames = cx(s.card, {
        [s.lifted]: lifted,
        [s.noLink]: !link,
        [s.small]: oneLine,
        [s.smallText]: smallText
    });

    return (
        <div className={s.cardWrapper}>
            <div
                className={cardClassNames}
                onMouseEnter={() => !window.matchMedia("screen and (max-width: 1200px)").matches ? setLifted(true) : null}
                onMouseLeave={() => !window.matchMedia("screen and (max-width: 1200px)").matches ? setLifted(false) : null}>
                    <Image layout={'responsive'}
                           height={'150%'}
                           width={'100%'}
                           className={decolorized ? s.img + ' ' + s.decolorized : s.img}
                           src={img}
                           alt="Афиша"/>
                <div className={s.content}>
                    <p dangerouslySetInnerHTML={{__html: subtitle}} className={s.subtitle}/>
                    <p dangerouslySetInnerHTML={{__html: title}} className={s.title}/>
                    {link && <div>Подробнее →</div>}
                </div>
            </div>
        </div>);
};

export default OffersSliderItem;
