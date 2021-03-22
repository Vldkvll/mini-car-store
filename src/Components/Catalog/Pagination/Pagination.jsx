import React, { useState } from "react";
import "./Pagination.css";

const Pagination = ({
    totalItemsCount,
    currentPage,
    onPageChange,
    portionSize = 8,
}) => {
    const [portionNumber, setPortionNumber] = useState(1);

    // console.log(totalItemsCount);

    let pageCount = Math.ceil(+totalItemsCount / 10);

    const pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className="pagination">
            <ul className="pagination-list">
                {pages
                    .filter(
                        (p) =>
                            p >= leftPortionPageNumber &&
                            p <= rightPortionPageNumber
                    )
                    .map((page) => {
                        return (
                            <li
                                className={
                                    currentPage === page
                                    ? "pagination-list__item pagination-list__item--active"
                                    : "pagination-list__item"
                                }
                                key={page}
                                onClick={(e) => {
                                    onPageChange(page);
                                }}
                            >
                                {page}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
};

export default Pagination;
