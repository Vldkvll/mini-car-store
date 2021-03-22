import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import bigCart from "../../images/big-cart.svg";
import "./Cart.css";
import { Link } from "react-router-dom";

function Cart({ dataCart, handleAddToCart, handleDeleteCart, handleMinusItemInCart}) {

    const handleCheckout = () => {
        return dataCart.reduce((acc, item )  => acc + Number(item.price),0)

    } 

    if(dataCart.length === 0 ) return (
        <>
        <div className={'emty-cart'} >
        <h2  >
            You have no items in your shopping cart,
            <h3 >
                <Link to="/" className={'emty-cart__link'}>
                    {" "}
                    start adding some!{" "}
                </Link>
            </h3>
        </h2>

        </div>
        </>
    )

    return (
        <> 
            <div className="catalog-title">
                <h1>CART</h1>
                <img
                    src={bigCart}
                    alt="big cart"
                />
            </div>
            <div className="catalog__inner-list">
                {dataCart.map((item) => (
                    <CartItem
                        key={item.id}
                        handleAddToCart={handleAddToCart}
                        handleDeleteCart={handleDeleteCart}
                        item={item}
                        handleMinusItemInCart={handleMinusItemInCart}
                    />
                ))}
            </div>
            <div className='total-cost'>
                <h3>
                Total 
                <span>
                ${handleCheckout()}

                </span>
                </h3>
                {/* <button
                onClick={handleCheckout}
                >Checkout</button> */}
            </div>
        </>
    );
}

export default Cart;
