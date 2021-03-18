import React from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.css";
import logo from "../../images/car.svg";
import heart from "../../images/heart.svg";
import user from "../../images/user.svg";
import cart from "../../images/cart.svg";

function Header() {
    const location = useLocation();

    return (
        <header className="header">
            <div className="header__top">
                <div className="container">
                    <div className="header__top-inner">
                        <nav className="menu">
                            <ul className="menu__list">
                                <li className="menu__item">
                                    <Link to="/">
                                        <div className="menu__link">
                                            Каталог
                                        </div>
                                    </Link>
                                </li>
                                <li className="menu__item">
                                    <div className="menu__link">Акции</div>
                                </li>
                                <li className="menu__item">
                                    <div className="menu__link">
                                        Доставка и оплата
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <Link to="/" className="logo">
                            <img className="logo__img" src={logo} alt="logo" />
                        </Link>
                        <div className="header__box">
                            <p className="header__adress">
                                Харьков, пр. Науки 25
                            </p>
                            {location.pathname !== "/cart" && (
                                <ul className="user-list">
                                    <li className="user-list__item">
                                        <div
                                            href="#"
                                            className="user-list__link"
                                        >
                                            <img
                                                src={heart}
                                                alt="heart"
                                                className="user-list__img"
                                            />
                                        </div>
                                    </li>
                                    <li className="user-list__item">
                                        <div className="user-list__link">
                                            <img
                                                src={user}
                                                alt="user"
                                                className="user-list__img"
                                            />
                                        </div>
                                    </li>
                                    <Link to="/cart">
                                        <li className="user-list__item basket">
                                            <div className="user-list__link">
                                                <img
                                                    src={cart}
                                                    alt="cart"
                                                    className="user-list__img"
                                                />
                                                <p className="basket__num">1</p>
                                            </div>
                                        </li>
                                    </Link>
                                </ul>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
