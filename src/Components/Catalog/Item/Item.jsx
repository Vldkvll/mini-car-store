import React from "react";
import "./Item.css";
import heart from '../../../images/cart-white.svg'

function Product() {
    return (
        <>
            <div class="catalog__inner-list">
                <div class="product-item__wrapper ">
                    <button class="product-item__favorite"></button>
                    <button class="product-item__basket">
                        <img
                            class=""
                            src={heart}
                            alt="cart"
                        />
                    </button>
                    <div href="#" class="product-item__notify-link">
                        <span>Сообщить о поступлении</span>
                    </div>
                    <div href="#" class="product-item">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img
                            class="product-item__img"
                            src="./images/content/jetski-1.png"
                            alt="product-1"
                        />
                        <h4 class="product-item__title">
                            Гидроцикл BRP SeaDoo GTI 130hp SE Black\Mango
                        </h4>
                        <p class="price product-item__price">1 049 500 ₽</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </div>
                </div>

                <div class="product-item__wrapper ">
                    <button class="product-item__favorite"></button>
                    <button class="product-item__basket">
                        <img
                            class=""
                            src={heart}
                            alt="cart"
                        />
                    </button>
                    <div href="#" class="product-item__notify-link">
                        <span>Сообщить о поступлении</span>
                    </div>
                    <div href="#" class="product-item product-item--sale">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img
                            class="product-item__img"
                            src="./images/content/jetski-2.png"
                            alt="product-1"
                        />
                        <h4 class="product-item__title">
                            Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic
                        </h4>
                        <p class="price product-item__price">1 100 475 ₽</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </div>
                </div>

                <div class="product-item__wrapper ">
                    <button class="product-item__favorite"></button>
                    <button class="product-item__basket">
                        <img
                            class=""
                            src={heart}
                            alt="cart"
                        />
                    </button>
                    <div href="#" class="product-item__notify-link">
                        <span>Сообщить о поступлении</span>
                    </div>
                    <div href="#" class="product-item">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img
                            class="product-item__img"
                            src="./images/content/jetski-3.png"
                            alt="product-1"
                        />
                        <h4 class="product-item__title">
                            Гидроцикл BRP SeaDoo GTR 230hp X California green
                        </h4>
                        <p class="price product-item__price">1 323 700 ₽</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </div>
                </div>

                <div class="product-item__wrapper product-item__no-available">
                    <button class="product-item__favorite"></button>
                    <button class="product-item__basket">
                        <img
                            class=""
                            src={heart}
                            alt="cart"
                        />
                    </button>
                    <div href="#" class="product-item__notify-link">
                        <span>Сообщить о поступлении</span>
                    </div>
                    <div href="#" class="product-item product-item--sale">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img
                            class="product-item__img"
                            src="./images/content/jetski-4.png"
                            alt="product-1"
                        />
                        <h4 class="product-item__title">
                            Гидроцикл BRP SeaDoo GTR 230hp STD Black /
                            Gulfstream
                        </h4>
                        <p class="price product-item__price">1 100 475 ₽</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </div>
                </div>

                <div class="product-item__wrapper ">
                    <button class="product-item__favorite"></button>
                    <button class="product-item__basket">
                        <img
                            class=""
                            src={heart}
                            alt="cart"
                        />
                    </button>
                    <div href="#" class="product-item__notify-link">
                        <span>Сообщить о поступлении</span>
                    </div>
                    <div href="#" class="product-item">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img
                            class="product-item__img"
                            src="./images/content/jetski-5.png"
                            alt="product-1"
                        />
                        <h4 class="product-item__title">
                            Гидроцикл BRP SeaDoo GTX 300hp LTD Liquid Metal
                        </h4>
                        <p class="price product-item__price">1 543 000 ₽</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </div>
                </div>

                <div class="product-item__wrapper ">
                    <button class="product-item__favorite"></button>
                    <button class="product-item__basket">
                        <img
                            class=""
                            src={heart}
                            alt="cart"
                        />
                    </button>
                    <div href="#" class="product-item__notify-link">
                        <span>Сообщить о поступлении</span>
                    </div>
                    <div href="#" class="product-item">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img
                            class="product-item__img"
                            src="./images/content/jetski-6.png"
                            alt="product-1"
                        />
                        <h4 class="product-item__title">
                            Гидроцикл BRP SeaDoo Spark 60hp 2 up
                        </h4>
                        <p class="price product-item__price">732 345 ₽</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </div>
                </div>

                <div class="product-item__wrapper ">
                    <button class="product-item__favorite"></button>
                    <button class="product-item__basket">
                        <img
                            class=""
                            src={heart}
                            alt="cart"
                        />
                    </button>
                    <div href="#" class="product-item__notify-link">
                        <span>Сообщить о поступлении</span>
                    </div>
                    <div href="#" class="product-item">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img
                            class="product-item__img"
                            src="./images/content/jetski-7.png"
                            alt="product-1"
                        />
                        <h4 class="product-item__title">
                            Гидроцикл BRP SeaDoo Spark GTS 90hp Rental
                        </h4>
                        <p class="price product-item__price">857 666 ₽</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </div>
                </div>

                <div class="product-item__wrapper ">
                    <button class="product-item__favorite"></button>
                    <button class="product-item__basket">
                        <img
                            class=""
                            src={heart}
                            alt="cart"
                        />
                    </button>
                    <div href="#" class="product-item__notify-link">
                        <span>Сообщить о поступлении</span>
                    </div>
                    <div href="#" class="product-item product-item--sale">
                        <p class="product-item__hover-text">посмотреть товар</p>
                        <img
                            class="product-item__img"
                            src="./images/content/jetski-8.png"
                            alt="product-1"
                        />
                        <h4 class="product-item__title">
                            Гидроцикл BRP SeaDoo WAKE 230hp PRO Teal blue
                        </h4>
                        <p class="price product-item__price">1 229 711 ₽</p>
                        <p class="product-item__notify-text">нет в наличии</p>
                    </div>
                </div>
                {/* 
<div class="product-item__wrapper ">
  <button class="product-item__favorite"></button>
  <button class="product-item__basket">
    <img class="" src={heart} alt="cart">
  </button>
  <div href="#" class="product-item__notify-link">
    <span>
      Сообщить о поступлении
    </span>
  </div>
  <div href="#" class="product-item">
    <p class="product-item__hover-text">
      посмотреть товар
    </p>
    <img class="product-item__img" src="./images/content/jetski-9.png" alt="product-1">
    <h4 class="product-item__title">
      Гидроцикл Spark 2-UP 900 Ho Ace Chili Pepper
    </h4>
    <p class="price product-item__price">
      587 440 ₽
    </p>
    <p class="product-item__notify-text">
      нет в наличии
    </p>
  </div>
</div>

<div class="product-item__wrapper ">
  <button class="product-item__favorite"></button>
  <button class="product-item__basket">
    <img class="" src={heart} alt="cart">
  </button>
  <div href="#" class="product-item__notify-link">
    <span>
      Сообщить о поступлении
    </span>
  </div>
  <div href="#" class="product-item">
    <p class="product-item__hover-text">
      посмотреть товар
    </p>
    <img class="product-item__img" src="./images/content/jetski-10.png" alt="product-1">
    <h4 class="product-item__title">
      Гидроцикл Spark 2-UP 900 Ho Ace Pineapple
    </h4>
    <p class="price product-item__price">
      587 440 ₽
    </p>
    <p class="product-item__notify-text">
      нет в наличии
    </p>
  </div>
</div>

<div class="product-item__wrapper product-item__no-available">
  <button class="product-item__favorite"></button>
  <button class="product-item__basket">
    <img class="" src={heart} alt="cart">
  </button>
  <div href="#" class="product-item__notify-link">
    <span>
      Сообщить о поступлении
    </span>
  </div>
  <div href="#" class="product-item product-item--sale">
    <p class="product-item__hover-text">
      посмотреть товар
    </p>
    <img class="product-item__img" src="./images/content/jetski-11.png" alt="product-1">
    <h4 class="product-item__title">
      Гидроцикл BRP Sea-doo Spark 2-UP 900 Ace Vanilla
    </h4>
    <p class="price product-item__price">
      0
    </p>
    <p class="product-item__notify-text">
      нет в наличии
    </p>
  </div>
</div>

<div class="product-item__wrapper product-item__no-available">
  <button class="product-item__favorite"></button>
  <button class="product-item__basket">
    <img class="" src={heart} alt="cart">
  </button>
  <div href="#" class="product-item__notify-link">
    <span>
      Сообщить о поступлении
    </span>
  </div>
  <div href="#" class="product-item ">
    <p class="product-item__hover-text">
      посмотреть товар
    </p>
    <img class="product-item__img" src="./images/content/jetski-12.png" alt="product-1">
    <h4 class="product-item__title">
      Гидроцикл Spark 3-UP 900 HO Ace IBR Blueberry
    </h4>
    <p class="price product-item__price">
      0
    </p>
    <p class="product-item__notify-text">
      нет в наличии
    </p>
  </div>
</div> */}
            </div>
        </>
    );
}

export default Product;
