import React, { useState } from "react";
import CartItem from "../CartItem/CartItem";
import bigCart from "../../images/big-cart.svg";
import "./Cart.css";

function Cart({ dataCart, handleAddToCart, handleDeleteCart, totalCost, handleMinusItemInCart}) {
    // console.log("dataCart");
    // console.log(dataCart);



    // const handleCheckout = () => {
    //     let res = alert(`Your Sum is ${totalCost}`)
    // } 


    return (
        <>
            <div className="catalog-title">
                <h1>CART</h1>
                <img
                    // className="product-item__img"
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
                        // handleEditProduct={handleEditProduct}
                    />
                ))}
            </div>
            <div className='total-cost'>
                <h3>
                Total ${totalCost}
                </h3>
                {/* <button
                onClick={handleCheckout}
                >Checkout</button> */}
            </div>
        </>
    );
}

export default Cart;
