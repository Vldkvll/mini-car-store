import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Filter.css";

function Filter({ handleFilter }) {
    const [value, setvalue] = useState("");

    const handleChange = (event) => {
        setvalue(event.target.value);
        handleFilter(event.target.value);
    };

    return (
        <>
            <div className="catalog__filter">
                <div className="catalog__filter__inner">
                    <div className="catalog__filter-items mobile-overflow">
                        <Link
                            to="./newproduct"
                            className="catalog__filter-items-btn"
                        >
                            создать карточку объекта
                        </Link>
                    </div>
                </div>
                <div className="catalog__filter-btn">
                    <form>
                        <select
                            className="filter-style select-item"
                            value={value}
                            // value="max"
                            onChange={handleChange}
                            name={""}
                        >
                            <option value="">Выберите опцию </option>
                            <option value="max">По возрастанию цены</option>
                            <option value="min">По убыванию цены</option>
                        </select>
                    </form>

                    {/* <button className="catalog__filter-btngrid catalog__filter-button catalog__filter-button--active">
                        <svg
                            width="23"
                            height="21"
                            viewBox="0 0 23 21"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                x="1"
                                y="1"
                                width="21"
                                height="19"
                                stroke="#2F3035"
                                strokeWidth="2"
                            />
                            <rect
                                x="7"
                                y="6"
                                width="2"
                                height="2"
                                fill="#2F3035"
                                stroke="#2F3035"
                                strokeWidth="2"
                            />
                            <rect
                                x="7"
                                y="13"
                                width="2"
                                height="2"
                                fill="#2F3035"
                                stroke="#2F3035"
                                strokeWidth="2"
                            />
                            <rect
                                x="14"
                                y="6"
                                width="2"
                                height="2"
                                fill="#2F3035"
                                stroke="#2F3035"
                                strokeWidth="2"
                            />
                            <rect
                                x="14"
                                y="13"
                                width="2"
                                height="2"
                                fill="#2F3035"
                                stroke="#2F3035"
                                strokeWidth="2"
                            />
                        </svg>
                    </button> */}
                    {/* <button className="catalog__filter-btnline catalog__filter-button ">
                        <svg
                            width="25"
                            height="19"
                            viewBox="0 0 25 19"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <g opacity="1">
                                <rect
                                    x="6"
                                    width="19"
                                    height="3"
                                    rx="1.5"
                                    fill="#2F3035"
                                />
                                <rect
                                    x="6"
                                    y="8"
                                    width="19"
                                    height="3"
                                    rx="1.5"
                                    fill="#2F3035"
                                />
                                <rect
                                    x="6"
                                    y="16"
                                    width="19"
                                    height="3"
                                    rx="1.5"
                                    fill="#2F3035"
                                />
                                <rect
                                    width="3"
                                    height="3"
                                    rx="1.5"
                                    fill="#2F3035"
                                />
                                <rect
                                    y="8"
                                    width="3"
                                    height="3"
                                    rx="1.5"
                                    fill="#2F3035"
                                />
                                <rect
                                    y="16"
                                    width="3"
                                    height="3"
                                    rx="1.5"
                                    fill="#2F3035"
                                />
                            </g>
                        </svg>
                    </button> */}
                </div>
            </div>
        </>
    );
}

export default Filter;
