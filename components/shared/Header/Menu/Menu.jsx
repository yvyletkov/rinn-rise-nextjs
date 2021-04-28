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

    return <div className={!menuOpened ? s.menuWrapper : s.menuWrapper + ' ' + s.opened}>

        <div className={s.flexContainer}>

            <div className={s.col}>
                <div className={s.menuItem} onClick={toggleMenu}>
                    {/* checkactive is for cheking main root page */}
                    <Link href={"/"}>
                        <a>
                            Главная
                        </a>
                    </Link>
                </div>

                <div className={s.menuItem} onClick={toggleMenu}>
                    <Link href={"/resort-vacation"}>
                        <a>
                            Курортный отдых
                        </a>
                    </Link>
                </div>

                <div className={s.menuItem} onClick={toggleMenu}>
                    <Link href={"/rooms"}>
                        <a>
                            Номера и цены
                        </a>
                    </Link>
                </div>
            </div>

            <div className={s.col}>
                <div className={s.menuItem} onClick={toggleMenu}>
                    <Link href={"/"}>
                        <a>
                            Инфраструктура
                        </a>
                    </Link>
                </div>

            </div>

            <div className={s.col}>


                <div className={s.menuItem} onClick={toggleMenu}>
                    <Link href={"/contacts"}>
                        <a>
                            Контакты
                        </a>
                    </Link>
                </div>

            </div>

            <div className={`${s.col}`}>
                <div className={s.callUs}>Свяжитесь с нами</div>
                <div className={s.location}>
                    {/*<img className={s.adressImg} src={'/images/footer/address.png'} alt="Наш адрес"/>*/}
                </div>
                <div className={s.phone}>
                    <img src={'/images/footer/phone.svg'} alt="Телефон"/>
                    <a href='tel:88005557856'>7 (800) 555-78-56</a>
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

