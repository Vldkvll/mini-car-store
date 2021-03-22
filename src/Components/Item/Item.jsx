import React from "react";
import "./Item.css";

import Product from "../Product/Product";

function Item({ data, handleAddToCart, handleDelete, handleEditProduct }) {
    return (
        <>
            <div className="catalog__inner-list">
                {data.map((item) => (
                    <Product
                        key={item.id}
                        handleAddToCart={handleAddToCart}
                        handleDelete={handleDelete}
                        item={item}
                        handleEditProduct={handleEditProduct}
                    />
                ))}

            </div>
        </>
    );
}

export default Item;
