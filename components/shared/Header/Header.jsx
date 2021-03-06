import React, {useState} from 'react'
import s from './Header.module.scss'
import Link from 'next/link'
import Menu from './Menu/Menu'
import useMediaQuery from '../customHooks/useMediaQuery'
import Image from 'next/image'
import PopupContactForm from '../../ContactForm/PopupContactForm';


const CustomLink = ({title, style, icon, link = '#', extraClass = null, onClickHandler, href = '#'}) => {
    if (href) return <Link href={href} onClick={onClickHandler ? onClickHandler : null} style={style}>
        <a className={s.link + ' ' + extraClass}>
            {icon && <img src={icon} alt={title}/>}
            {title && <div>{title}</div>}
        </a>
    </Link>

    return <Link onClick={onClickHandler ? onClickHandler : null} style={style} href={link}>
        <a className={s.link + ' ' + extraClass}>
            {icon && <img src={icon} alt={title}/>}
            {title && <div>{title}</div>}
        </a>
    </Link>
}

const Header = () => {

    let [scrolledFromTop, setScrolledFromTop] = useState(0)
    let [menuOpened, setMenuOpened] = useState(false)
    let [popupOpened, setPopupOpened] = useState(false)
    const [innerHeight, setInnerHeight] = useState()

    const listenToScroll = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop
        setScrolledFromTop(scroll)
    };

    React.useEffect(() => {
        window.addEventListener('scroll', listenToScroll)
        setInnerHeight(window.innerHeight)
        return () => window.removeEventListener('scroll', listenToScroll)
    }, [])

    const toggleMenu = () => {
        setMenuOpened(status => !status)
    };

    return (<>

            <header className={s.wrapper}>

                <Menu toggleMenu={toggleMenu} menuOpened={menuOpened}/>

                <div className={s.container}>

                    <div className={scrolledFromTop > innerHeight / 3 ? `${s.content} ${s.minified}` : s.content}>
                        <div className={menuOpened ? s.menuIcon + ' ' + s.opened : s.menuIcon}
                        onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                        <div className={s.leftBlock}>
                            <CustomLink title={"??????????"} href={"#"} />
                            <CustomLink title={"???????????? ?? ????????"} href={"/rooms"} />
                            <CustomLink title={"????????????????????????????"} href={"/infrastructure"} />
                        </div>
                        <div className={s.logo}>
                            <Link href={'/'}>
                                <a>
                                    <div className={s.logoWrapper}>
                                        <Image loading={'eager'} layout={'fill'} src={'/images/rinnrise-logo.svg'} alt="Rinnrise"/>
                                    </div>
                                </a>
                            </Link>
                        </div>
                        <div className={s.rightBlock}>
                            <div className={s.contacts}>
                                <a href={"tel:88005007217"} className={s.link + ' ' + s.number}>
                                    <img src={'/images/footer/phone.svg'} alt={'??????????????'}/>
                                    <div className={s.telephone}>8 (800) 500 72 17</div>
                                    <span className={s.location}>
                                        ??????????????, ??. ??????????
                                    </span>
                                </a>
                            </div>

                            <div className={s.button} onClick={() => setPopupOpened(true)}>{
                                useMediaQuery('(max-width: 1200px)')
                                    ? <img style={{
                                        width: "47%",
                                        filter: 'invert(1)'
                                    }} src={'/images/footer/phone.svg'} alt=""/>
                                    : '???????????????? ????????????'
                            }</div>

                        </div>

                    </div>
                </div>

                <PopupContactForm popupOpen={popupOpened} setPopupOpen={setPopupOpened}
                                  popupTitleText={'????????????????????, ?????????????? ???????? ???????????????????? ????????????'}
                                  submitBtnText='?????? ????????????'
                                  formName={`???????????????????? ?????????? ???? ?????????? ??????????`}
                                  swalText={'?????????? ?????????? ???????? ?????????????????? ???????????????? c ????????'}
                                  withName
                                  withPhone/>

            </header>

        </>
    )
}

export default Header

