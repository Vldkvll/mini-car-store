import React from "react";
import "./Item.css";
import cart from "../../images/cart-white.svg";
import { Link } from "react-router-dom";
import { idGenerator } from "../../utils/idGenerator";

const id = idGenerator();
console.log(id);

function Item({ data, handleAddToCart }) {
    return (
        <>
            <div className="catalog__inner-list">
                {data.map((item) => (
                    <div className="product-item__wrapper " key={item.id}>
                        <button className="product-item__favorite"></button>
                        <button
                            className={
                                item.inCart ? "product-item__basket--disable" : `product-item__basket`
                            }
                            onClick={()=>handleAddToCart(item.id)}
                        >
                          
                                <img className="" src={cart} alt="cart" />
                            
                        </button>
                        <div className="product-item__notify-link">
                            <span>Сообщить о поступлении</span>
                        </div>
                        <div
                            className={
                                item.inCart
                                    ? `product-item product-item--sale`
                                    : `product-item`
                            }
                        >
                            <Link to="/product">
                                <p className="product-item__hover-text">
                                    посмотреть товар
                                </p>
                            </Link>
                            <img
                                className="product-item__img"
                                src={item.img}
                                alt={item.title}
                            />
                            <h4 className="product-item__title">
                                {item.title}
                            </h4>
                            <span>{item.description}</span>
                            <p className="price product-item__price">
                                ${item.price} k.
                            </p>
                            <p className="product-item__notify-text">
                                нет в наличии
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Item;
