import React from "react";
import Item from "../Item/Item";
import Filter from "./Filter/Filter";
import Pagination from "./Pagination/Pagination";
import "./Catalog.css";

function Catalog({
    data,
    onPageChange,
    totalItemsCount,
    currentPage,
    handleAddToCart,
    handleDelete,
    handleEditProduct
}) {
    return (
        <div className="catalog-container">
            <Filter />
            <Item
                data={data}
                handleAddToCart={handleAddToCart}
                handleDelete={handleDelete}
                handleEditProduct={handleEditProduct}
            />
            <Pagination
                onPageChange={onPageChange}
                currentPage={currentPage}
                totalItemsCount={totalItemsCount}
            />
        </div>
    );
}

export default Catalog;
