import React from "react";
import useInput from "../../hooks/useInput";
import "./Input.css";

function Input({ type, value, onChange, placeholder, min = 0, name }) {
    return (
        <>
            <input
                type={type}
                name={name}
                onChange={onChange}
                min={min}
                value={value}
                placeholder={placeholder}
                className="product-input"
            />
        </>
    );
}

export default Input;
