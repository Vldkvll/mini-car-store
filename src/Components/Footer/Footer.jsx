import React from "react";

import "./Footer.css";
import insta from '../../images/icon/insta-icon.svg'
import vk from '../../images/icon/vk-icon.svg'
import fb from '../../images/icon/fb-icon.svg'
import youTube from '../../images/icon/youtube-icon.svg'

function Footer() {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="footer-top__inner">
                        <div className="footer-top__item footer-top__newslatter">
                            <h6 className="footer-top__title">
                                Подпишитесь на нашу рассылку и узнавайте о
                                акциях быстрее
                            </h6>
                            <form action="" className="footer-form">
                                <input
                                    type="text"
                                    className="footer-form__input"
                                    placeholder="Введите ваш e-mail:"
                                />
                                <button
                                    type="submit"
                                    className="footer-form__btn"
                                >
                                    {" "}
                                    Отправить
                                </button>
                            </form>
                        </div>
                        <div className="footer-top__item footer-drop">
                            <h6 className="footer-top__title  footer-droptitle">
                                Информация
                            </h6>
                            <ul className="footer-list">
                                <li className="footer-list__item">
                                    <div >О компании</div>
                                </li>
                                <li className="footer-list__item">
                                    <div >Контакты</div>
                                </li>
                                <li className="footer-list__item">
                                    <div >Акции</div>
                                </li>
                                <li className="footer-list__item">
                                    <div >Магазины</div>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-top__item footer-drop">
                            <h6 className="footer-top__title footer-droptitle">
                                Интернет-магазин
                            </h6>
                            <ul className="footer-list">
                                <li className="footer-list__item">
                                    <div >Доставка и самовывоз</div>
                                </li>
                                <li className="footer-list__item">
                                    <div >Оплата</div>
                                </li>
                                <li className="footer-list__item">
                                    <div >Возврат-обмен</div>
                                </li>
                                <li className="footer-list__item">
                                    <div >Новости</div>
                                </li>
                            </ul>
                        </div>
                        <div className="footer-top__item footer-top__social">
                            <ul className="social-list">
                                <li className="social-list__item">
                                    <div  className="social-list__link">
                                        <img
                                            src={insta}
                                            alt="insta"
                                            className="social-list__img"
                                        />
                                    </div>
                                </li>
                                <li className="social-list__item">
                                    <div  className="social-list__link">
                                        <img
                                            src={vk}
                                            alt="vk"
                                            className="social-list__img"
                                        />
                                    </div>
                                </li>
                                <li className="social-list__item">
                                    <div  className="social-list__link">
                                        <img
                                            src={fb}
                                            alt="fb"
                                            className="social-list__img"
                                        />
                                    </div>
                                </li>
                                <li className="social-list__item">
                                    <div  className="social-list__link">
                                        <img
                                            src={youTube}
                                            alt="youTube"
                                            className="social-list__img"
                                        />
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="footer-bottom__link" href="">
                        Договор оферты
                    </div>
                    <div className="footer-bottom__link" href="">
                        Политика обработки персональных данных
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
