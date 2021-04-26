import React, {useState} from "react";
import s from "./Header.module.scss";
import Link from 'next/link'
import Menu from "./Menu/Menu";
import useMediaQuery from "../customHooks/useMediaQuery";
// import PopupContactForm from "../additional/ContactForm/PopupContactForm";


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
};

const Header = () => {

    let [scrolledFromTop, setScrolledFromTop] = useState(0);
    let [menuOpened, setMenuOpened] = useState(false);
    let [popupOpened, setPopupOpened] = useState(false);
    const [innerHeight, setInnerHeight] = useState();

    const listenToScroll = () => {
        const scroll = document.body.scrollTop || document.documentElement.scrollTop;
        setScrolledFromTop(scroll)
    };

    React.useEffect(() => {
        window.addEventListener('scroll', listenToScroll);
        setInnerHeight(window.innerHeight);
        return () => window.removeEventListener('scroll', listenToScroll)
    }, []);

    const toggleMenu = () => {
        setMenuOpened(status => !status)
    };

    const handleLinkClick = (e) => {
        e.preventDefault()
    }

    return (<>

            <div className={s.wrapper}>

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
                            <CustomLink title={"Акции"} href={"/residence"} onClickHandler={(e) => {
                                handleLinkClick(e);
                                document.querySelector('#residence').scrollIntoView({behavior: 'smooth', block: 'start'})
                            }}/>
                            <CustomLink title={"Номера и цены"} href={"/sports"} onClickHandler={(e) => {
                                handleLinkClick(e);
                                document.querySelector('#sports').scrollIntoView({behavior: 'smooth', block: 'start'})
                            }}/>
                            <CustomLink title={"Инфраструктура"} href={"/sports"} onClickHandler={(e) => {
                                handleLinkClick(e);
                                document.querySelector('#sports').scrollIntoView({behavior: 'smooth', block: 'start'})
                            }}/>
                        </div>
                        <div className={s.logo}>
                            <Link href={'/'}>
                                <a>
                                    <img src={'/images/rinnrise-logo.png'} alt="Rinnrise"/>
                                </a>
                            </Link>
                        </div>
                        <div className={s.rightBlock}>
                            {/*<CustomLink icon={search}*/}
                            {/*      extraClass={s.searchIcon} href={"/search"} onClickHandler={handleLinkClick} style={{cursor: 'not-allowed'}}/>*/}
                            <div className={s.contacts}>
                                <a href={"tel:88005557856"} className={s.link + ' ' + s.number}>
                                    <img src={'/images/footer/phone.svg'} alt={'Телефон'}/>
                                    <div className={s.telephone}>+7 (800) 555-78-56</div>
                                    <span className={s.location}>
                                        Джемете, г. Анапа
                                    </span>
                                </a>
                            </div>

                            <div className={s.button} onClick={() => setPopupOpened(true)}>{
                                useMediaQuery('(max-width: 1200px)')
                                    ? <img style={{
                                        width: "47%",
                                        filter: 'invert(1)'
                                    }} src={'/images/phone.svg'} alt=""/>
                                    : 'Заказать звонок'
                            }</div>

                        </div>

                    </div>
                </div>

                {/*<PopupContactForm popupOpen={popupOpened} setPopupOpen={setPopupOpened}*/}
                {/*                  popupTitleText={'Пожалуйста, укажите свои контактные данные'}*/}
                {/*                  submitBtnText='Жду звонка'*/}
                {/*                  formName={`Контактная форма из шапки сайта`}*/}
                {/*                  swalText={'очень скоро наши менеджеры свяжутся c Вами'}*/}
                {/*                  withName*/}
                {/*                  withPhone/>*/}

            </div>

        </>
    )
};

export default Header;

