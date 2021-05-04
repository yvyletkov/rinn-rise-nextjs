// import React from "react";
import s from "./Menu.module.scss";
import Link from 'next/link'
import {useState} from 'react';

const Menu = ({menuOpened, toggleMenu}) => {

    let [resortVacationOpened, setResortVacationOpened] = useState(false);
    let [miceOpened, setMiceOpened] = useState(false);
    let [eventOpened, setEventOpened] = useState(false);
    let [infrastructureOpened, setInfrastructureOpened] = useState(false);

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
                    <Link href={"/infrastructure"}>
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
                    <a href='tel:88005007217'>8 (800) 500 72 17</a>
                </div>
                <div className={s.icons}>
                    <a target={'_blank'} href="https://instagram.com/rinnrisehotel">
                        <img src={'/images/footer/inst.png'} alt="Instagram"/>
                    </a>
                    <a target={'_blank'} href="https://www.facebook.com/Rinn-Rise-106305541613817/">
                        <img src={'/images/footer/facebook.png'} alt="Facebook"/>
                    </a>
                    <a target={'_blank'} href="https://vk.com/rinnrise">
                        <img src={'/images/footer/vk.png'} alt="ВК"/>
                    </a>
                </div>

            </div>


        </div>


    </div>

};

export default Menu;

