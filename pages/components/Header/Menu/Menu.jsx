import React from "react";
import s from "./Menu.module.scss";
import Link from 'next/link'

const Menu = ({menuOpened, toggleMenu}) => {

    let [resortVacationOpened, setResortVacationOpened] = React.useState(false);
    let [miceOpened, setMiceOpened] = React.useState(false);
    let [eventOpened, setEventOpened] = React.useState(false);
    let [infrastructureOpened, setInfrastructureOpened] = React.useState(false);

    const toggleResortVacation = () => {
        setMiceOpened(false);
        setResortVacationOpened(!resortVacationOpened)
    };
    const toggleMice = () => {
        setResortVacationOpened(false);
        setMiceOpened(!miceOpened)
    };
    const toggleEvent = () => {
        setInfrastructureOpened(false);
        setEventOpened(!eventOpened)
    };
    const toggleInfrastructure = () => {
        setEventOpened(false);
        setInfrastructureOpened(!infrastructureOpened)
    };

    const handleLinkClick = (e) => {
        e.preventDefault()
    }

    const checkActive = (match, location) => {
        if (!location) return false;
        const {pathname} = location;
        return pathname === "/";
    }

    return <div className={!menuOpened ? s.menuWrapper : s.menuWrapper + ' ' + s.opened}>

        <div className={s.flexContainer}>

            <div className={s.col}>

                {/*<div className={!resortVacationOpened ? `${s.menuItem}` : `${s.menuItem} ${s.opened}`}>*/}
                {/*    <p onClick={toggleResortVacation}>*/}
                {/*        Курортный отдых*/}
                {/*    </p>*/}
                {/*    <img src={arrowIcon} onClick={toggleResortVacation}*/}
                {/*         className={!resortVacationOpened ? s.arrow + ' ' + s.rotated : s.arrow}*/}
                {/*         alt=""/>*/}


                {/*    <div className={s.list}>*/}

                {/*        <Link href={"/family-vacation"}>*/}
                {/*            <div className={s.listItem} onClick={toggleMenu}>*/}
                {/*                Семейный отдых*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}

                {/*        <NavLink to={"/vacation-for-yourself"}>*/}
                {/*            <div className={s.listItem} onClick={toggleMenu}>*/}
                {/*                Отдых без детей*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}

                {/*        <NavLink to={"/romantic-vacation"}>*/}
                {/*            <div className={s.listItem} onClick={toggleMenu}>*/}
                {/*                Романтический отдых*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}

                {/*        <NavLink to={"/vacation-with-friends"}>*/}
                {/*            <div className={s.listItem} onClick={toggleMenu}>*/}
                {/*                Отдых с друзьями*/}
                {/*            </div>*/}
                {/*        </NavLink>*/}

                {/*    </div>*/}

                {/*</div>*/}

                <div className={s.menuItem} onClick={toggleMenu}>
                    {/* checkactive is for cheking main root page */}
                    <Link isActive={checkActive} href={"/"} onClick={(e) => {
                        handleLinkClick(e)
                        document.querySelector('#sports').scrollIntoView({behavior: 'smooth', block: 'start'})
                    }}>
                        <a>
                            Спортивные сборы
                        </a>
                    </Link>
                </div>

                <div className={s.menuItem} onClick={toggleMenu}>
                    {/* checkactive is for cheking main root page */}
                    <Link isActive={checkActive} href={"/"} onClick={(e) => {
                        handleLinkClick(e)
                        document.querySelector('#gyms').scrollIntoView({behavior: 'smooth', block: 'start'})
                    }}>
                        <a>
                            Спортсооружения
                        </a>
                    </Link>
                </div>


            </div>

            <div className={s.col}>

                <div className={s.menuItem} onClick={toggleMenu}>
                    <Link isActive={checkActive} href={"/"} onClick={(e) => {
                        handleLinkClick(e)
                        document.querySelector('#aboutCenter').scrollIntoView({behavior: 'smooth', block: 'start'})
                    }}>
                        <a>
                            О центре
                        </a>
                    </Link>
                </div>

            </div>

            <div className={s.col}>


                <div className={s.menuItem} onClick={toggleMenu}>
                    <Link href={"/"} onClick={(e) => {
                        handleLinkClick(e)
                        document.querySelector('#footer').scrollIntoView({behavior: 'smooth', block: 'start'})
                    }}>
                        <a>
                            Контакты
                        </a>
                    </Link>
                </div>

            </div>

            <div className={`${s.col}`}>
                <div className={s.callUs}>Свяжитесь с нами</div>
                <div className={s.location}>
                    <img className={s.adressImg} src={'/images/footer/address.png'} alt="Наш адрес"/>
                </div>
                <div className={s.phone}>
                    <img src={'/images/footer/phone.svg'} alt="Телефон"/>
                    <a href='tel:88005000347'>8 (800) 500-03-47</a>
                </div>
                <div className={s.icons}>
                    <a target={'_blank'} href="https://www.instagram.com/prometey82">
                        <img src={'/images/footer/inst.png'} alt="Instagram"/>
                    </a>
                    <a target={'_blank'} href="https://www.facebook.com/prometey82">
                        <img src={'/images/footer/facebook.png'} alt="Facebook"/>
                    </a>
                    <a target={'_blank'} href="https://vk.com/prometey_82">
                        <img src={'/images/footer/vk.png'} alt="ВК"/>
                    </a>
                </div>

            </div>


        </div>


    </div>

};

export default Menu;

