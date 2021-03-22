import React from "react";
import cart from "../../images/cart-white.svg";
import { Link } from "react-router-dom";
import "./Product.css";

function Product({ item, handleAddToCart, handleEditProduct, handleDelete }) {
    return (
        <>
            <div className="product-item__wrapper ">
                <button
                    className="product-item__favorite"
                    onClick={() => handleDelete(item.id)}
                ></button>
                <button
                    className={
                        item.inCart
                            ? "product-item__basket--disable"
                            : `product-item__basket`
                    }
                    onClick={() => handleAddToCart(item)}
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
                    <Link
                        onClick={() => handleEditProduct(item)}
                        to="/newproduct"
                    >
                        <p className="product-item__hover-text">Edit Product</p>
                    </Link>
                    <img
                        className="product-item__img"
                        src={item.img}
                        alt={item.title}
                    />
                    <h4 className="product-item__title">{item.title}</h4>
                    <span>{item.description}</span>
                    <p className="price product-item__price">
                        ${item.price} k.
                    </p>
                    <p className="product-item__notify-text">нет в наличии</p>
                </div>
            </div>
        </>
    );
}

export default Product;
