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
    handleEditProduct,
}) {
    const handleFilter = (event) => {
        switch (event) {
            case "":
                return;
            case "max":
                return data.sort((a, b) => Number(a.price) - Number(b.price));
            case "min":
                return data.sort((a, b) => Number(b.price) - Number(a.price));

            default:
                return data;
        }
    };

    return (
        <div className="catalog-container">
            <Filter handleFilter={handleFilter} />
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
