import React from "react";
import "./Input.css";

function Input({ type, value, onChange, placeholder, min = 0, name }) {
    return (
        <>
            <input
            required
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
