import React, { useState } from "react";
import Input from "../Input/Input";
import useInput from "../../hooks/useInput";
import "./NewProduct.css";
import { Redirect } from "react-router-dom";

function NewProduct({}) {
    const [redirect, setRedirect] = useState(false);
    const title = useInput("");
    const price = useInput("");
    const image = useInput("");
    const description = useInput("");

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(title.value);
        console.log(price.value);
        console.log(description.value);
        console.log();
        title.onChange();
        price.onChange();
        description.onChange();
        setRedirect(true);
    };

    function redirectTo() {
        return <Redirect to="/" />;
    };

    if (redirect) return redirectTo();

    return (
        <div className="form-wrapper">
            <form className="decor" onSubmit={onSubmit}>
                <div className="form-left-decoration"></div>
                <div className="form-right-decoration"></div>
                <div className="circle"></div>
                <div className="form-inner">
                    <h3>Create Product</h3>
                    <Input type="text" placeholder="Title" {...title} />
                    <Input
                        type="number"
                        min="0"
                        placeholder="Price"
                        {...price}
                    />
                    <Input type="text" placeholder="Image" {...image} />
                    <textarea
                        placeholder="Description..."
                        rows="3"
                        {...description}
                    ></textarea>
                    <button type="save" value="Send">
                        Save
                    </button>
                </div>
            </form>
        </div>
    );
}

export default NewProduct;
