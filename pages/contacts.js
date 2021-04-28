import React from 'react';
import s from '../styles/contactsPage.module.scss';
import Head from 'next/head';

const ContactsPage = () => {
    const [showDescr, setShowDescr] = React.useState(false);

    return (<>
            <Head>
                <title>Rinn Rise – Контакты – Анапа, Джемете</title>
            </Head>
            <main>
                <section className="section">
                    <div className={s.wrapper}>
                        <div className={s.container}>
                            <div className={s.topRow}>
                                <h4 className={s.title}>
                                    <span>Наши</span>
                                    <span>контакты</span>
                                </h4>
                                <div className={s.textContent}>
                                    <p>ул. Ленина 2, Алушта, Крым</p>
                                    <p>GPS координаты: 44.667638, 34.411936</p>
                                    <p>Воспользуйтесь услугой трансфер, заказать вы можете по телефону
                                        <b><a href="tel:8 800 550 98 24" target={'_blank'}>8 800 550 98 24</a></b>
                                    </p>
                                    <div className={s.btn} onClick={() => setShowDescr(!showDescr)}><b>Как к нам
                                        добраться?</b>
                                    </div>
                                    <div className={showDescr ? s.description + ' ' + s.active : s.description}>
                                        {/*<img src={busImg} alt="Автобус"/>*/}
                                        <p><b>Общественным автотранспортом:</b></p>
                                        <ul>
                                            <li>Из автовокзала г. Симферополь ежедневный рейсы автобусов Симферополь —
                                                Алушта
                                            </li>
                                            <li>Из троллейбусного парка г. Симферополь ежедневное рейсы троллейбусов
                                                Симферополь
                                                -
                                                Алушта. № троллейбуса 51,52
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div className={s.flexWrapper}>
                                <div className={s.col}>
                                    <div className={s.contactsItem}>
                                        <h5>Riviera Sunrise Resort & SPA</h5>
                                        <p>Адрес: 298500 Республика Крым,
                                            <span>г. Алушта, ул. Ленина 2</span></p>
                                    </div>

                                    <div className={s.contactsItem}>
                                        <h5>Ресепшен</h5>
                                        <p><a target={'_blank'}
                                              href="mailto:info.alushta@rivierasunrise.com">info.alushta@rivierasunrise.com</a>
                                            <span><a style={{whiteSpace: 'nowrap'}} href="tel:88005509824">8 800 550 98 24</a></span>
                                            <span><a style={{whiteSpace: 'nowrap'}} href="tel:+89789174240">+7 (978) 917 42 40</a></span>
                                        </p>
                                    </div>

                                    <div className={s.contactsItem}>
                                        <h5>Конференц-сервис</h5>
                                        <p>
                                            <a target={'_blank'}
                                              href="mailto:mice@rivierasunrise.com">mice@rivierasunrise.com
                                            </a>
                                            <span>
                                                <a href="tel:8 978 900 20 58">8 978 900 20 58</a>
                                            </span>
                                        </p>
                                        <p>
                                            <a target={'_blank'}
                                              href="mailto:event@rivierasunrise.com">event@rivierasunrise.com
                                            </a>
                                            <span><a href="tel:8 978 934 13 74">8 978 934 13 74</a></span></p>
                                    </div>

                                    <div className={s.contactsItem}>
                                        <h5>Отдел по работе с<br/>
                                            Туроператорами</h5>
                                        <p>
                                            <a target={'_blank'}
                                               href="mailto:a.nikolaeva@hoteliers-u.pro">a.nikolaeva@hoteliers-u.pro</a>
                                            <a target={'_blank'}
                                               href="mailto:to@hoteliers-u.pro">to@hoteliers-u.pro</a>
                                        </p>
                                    </div>

                                </div>

                                <div className={s.col}>

                                    <div className={s.contactsItem}>
                                        <h5>Отдел бронирования</h5>
                                        <p><a href="tel:8 800 550 98 24">8 800 550 98 24</a> (круглосуточно)
                                            <span>
                                                <a target={'_blank'}
                                                     href="mailto:reservation@rivierasunrise.com">reservation@rivierasunrise.com
                                                </a>
                                            </span>
                                        </p>
                                    </div>

                                    <div className={s.contactsItem}>
                                        <h5>SPA-комплекс The Shore SPA</h5>
                                        <p>
                                            <a target={'_blank'}
                                              href="mailto:spa.alushta@rivierasunrise.com">spa.alushta@rivierasunrise.com
                                            </a>
                                            <span>
                                                <a href="tel:+79789153591">8 978 915 35 91
                                                </a>
                                            </span>
                                        </p>
                                        <div className={s.smallDesc}>Услуги предоставляются на основании лицензии на
                                            осуществление медицинской
                                            деятельности № ЛО 82-01-000662. Лицензия предоставлена ООО СПА БЕРЕГ
                                            Министерством здравоохранения республики Крым.
                                        </div>
                                    </div>

                                    <div className={s.contactsItem}>
                                        <h5>Отдел кадров</h5>
                                        <p>
                                            <a target={'_blank'}
                                              href="mailto:аnna.leshinskaya@rivierasunrise.com">аnna.leshinskaya@rivierasunrise.com
                                            </a>
                                            <span>
                                                <a href="tel:+79789153388">8 978 915 33 88</a>
                                            </span>
                                            <span>
                                                <a href="tel:+79780213545">8 978 021 35 45</a>
                                            </span>
                                        </p>
                                    </div>

                                </div>

                                <div className={s.formWrapper}>
                                    {/*<ContactForm withEmail*/}
                                    {/*             withMessage*/}
                                    {/*             formName={'Форма со страницы Контакты" (Обратная связь)'}*/}
                                    {/*             swalText={'мы внимательно изучим Ваше сообщение и свяжемся с Вами при необходимости'}*/}
                                    {/*             submitBtnText={'Отправить'}/>*/}
                                </div>

                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}

export default ContactsPage;
