import React from "react";
import add from "../../images/icon/add-cart.svg";
import del from "../../images/icon/rem-cart.svg";

import "./CartItem.css";

function CartItem({
    item,
    handleDeleteCart,
    handleMinusItemInCart,
    handleAddToCart,
}) {
    return (
        <>
            <div className="cart-item__wrapper ">
                <button className="cart-item__favorite"></button>
                <button
                    className=" cart-item__basket"
                    onClick={() => handleAddToCart(item)}
                >
                    <img className="" src={add} alt="cart" />
                </button>
                <h4 className="cart-item__add cart-item__basket-count">
                    {item.quantity}
                </h4>
                <button
                    className="cart-item__add cart-item__basket-rem"
                    onClick={
                        (item.quantity === 1
                            ? () => handleDeleteCart(item)
                            : () => handleMinusItemInCart(item))
                    }
                    // onClick={() => handleAddToCart(item.id)}
                >
                    <img className="" src={del} alt="cart" />
                </button>
                <div className={`cart-item`}>
                    <img
                        className="cart-item__img"
                        src={item.img}
                        alt={item.title}
                    />
                    <h4 className="cart-item__title">{item.title}</h4>
                    <span>{item.description}</span>
                    <p className="price cart-item__price">${item.price} k.</p>
                    <p className="cart-item__notify-text">нет в наличии</p>
                </div>
            </div>
        </>
    );
}

export default CartItem;
