import React, { useState } from "react";
import Input from "../Input/Input";
import useInput from "../../hooks/useInput";
import "./NewProduct.css";
import { Redirect } from "react-router-dom";
import { fixTitleText } from "../../utils/textTransform";

function NewProduct({
    sendDataProduct,
    editProduct,
    handleCompleteEditProduct,
}) {
    const [redirect, setRedirect] = useState(false);
    const title = useInput(editProduct ? editProduct.title : "");
    const price = useInput(editProduct ? editProduct.price : "");
    const image = useInput(editProduct ? editProduct.img : "");
    const description = useInput(editProduct ? editProduct.description : "");

    const onSubmit = (e) => {
        e.preventDefault();

        // console.log(title.value);
        // console.log(price.value);
        // console.log(image.value);
        // console.log(description.value);
        // console.log();
        title.onChange();
        price.onChange();
        image.onChange();
        description.onChange();
        const dataProduct = {
            title: fixTitleText(title.value),
            price: price.value,
            img: image.value,
            description: description.value,
            inCart: false
        }
        let id 
        if(editProduct) {
            id = editProduct.id
            const editDataProduct = {...dataProduct, id}
            console.log(editDataProduct)
            handleCompleteEditProduct(editDataProduct)
        } else {
            sendDataProduct(dataProduct);
        }
   
        setRedirect(true);
    };

    function redirectTo() {
        return <Redirect to="/" />;
    }

    if (redirect) return redirectTo();

    return (
        <div className="form-wrapper">
            <form className="decor" onSubmit={onSubmit}>
                <div className="form-left-decoration"></div>
                <div className="form-right-decoration"></div>
                <div className="circle"></div>
                <div className="form-inner">
                    {editProduct ? (
                        <>
                            <h3>Edit Product</h3>
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
                        </>
                    ) : (
                        <>
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
                        </>
                    )}
                </div>
            </form>
        </div>
    );
}

export default NewProduct;
