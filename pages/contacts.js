// import React from 'react'
import s from '../styles/contactsPage.module.scss'
import Head from 'next/head'

const ContactsPage = () => {

    return (<>
            <Head>
                <title>Контакты – Rinn Rise – Анапа, Джемете</title>
            </Head>
            <main>
                <section className="section">
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <div className={s.topRow}>
                                <h2 className={s.headlineCenter}>Наши контакты</h2>
                                <div className={s.textContent}>
                                    <p>Краснодарский край, г.Анапа, ул.Гулаева, 6</p>
                                    <p>GPS координаты: 44.957467, 37.298769</p>
                                </div>
                            </div>

                            <div className={s.flexWrapper}>
                                <div className={s.contactsItem}>
                                    <h5>Rinn Rise</h5>
                                    <p>Адрес: 353456 Краснодарский край,
                                        <span>г.Анапа, ул.Гулаева, 6</span></p>
                                </div>

                                <div className={s.contactsItem}>
                                    <h5>Отдел бронирования</h5>
                                    <p>с 9.00 до 21.00
                                        <span>
                                            <a href="tel:88005007217">8 (800) 500 72 17</a>
                                        </span>
                                        <a target={'_blank'}
                                           href="mailto:reservation@rinnrise.ru">reservation@rinnrise.ru
                                        </a>
                                    </p>
                                </div>

                                <div className={s.contactsItem}>
                                    <h5>Ресепшен</h5>
                                    <p> круглосуточно
                                        <span>
                                            <a style={{whiteSpace: 'nowrap'}}
                                               href="tel:88005007217">8 (800) 500 72 17</a>
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    )
}

export default ContactsPage
