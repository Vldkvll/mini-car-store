import Header from "./Components/Header/Header";
import Catalog from "./Components/Catalog/Catalog";
import { Route, Switch } from "react-router-dom";

import Cart from "./Components/Cart/Cart";
import Product from "./Components/Product/Product";
import { api } from "./api/api";
import { useEffect, useState } from "react";
import Spinner from "./Components/Spinner/Spinner";
import Footer from "./Components/Footer/Footer";
import NewProduct from "./Components/NewProduct/NewProduct";
import "./App.css";

function App() {
    const [totalItemsCount, setTotalItemsCount] = useState("");
    const [totalCurtItemsCount, setTotalCurtItemsCount] = useState("");
    const [data, setData] = useState("");
    const [dataCart, setDataCart] = useState("");
    const [newItemInCart, setNewItemInCart] = useState(null);
    const [editComleteProd, setEditComleteProd] = useState(null);
    const [changeLength, setChangeLength] = useState(0);
    const [changeLengthCart, setChangeLengthCart] = useState(0);
    const [delId, setDelId] = useState(null);
    const [delCarId, setDelCarId] = useState(null);
    const [currentPage, setCurrrentPage] = useState(1);
    const [newProduct, setNewProduct] = useState(null);
    const [editProduct, setEditProduct] = useState(null);
    const [editCart, setEditCart] = useState(null);

    useEffect(() => {
        const res = async () => {
            const prod = await api.getProduct("products");
            if (changeLength > 0) return setTotalItemsCount(prod.length - 1);
            setTotalItemsCount(prod.length);
        };
        res();
    }, [changeLength]);

    useEffect(() => {
        const res = async () => {
            const prod = await api.getProduct("cart");

            setTotalCurtItemsCount(prod.length);
            

        };
        res();
    }, [changeLengthCart]);

    useEffect(() => {
        const res = async () => {
            const prod = await api.getProductPagination(
                "products",
                currentPage
            );
            setData(prod);
        };
        res();
    }, [currentPage]);

    useEffect(() => {
        const res = async () => {
            const prod = await api.getProduct("cart");
            console.log("createProduct cart length");
            console.log(prod);
            setDataCart(prod);
        };
        res();
    }, [changeLengthCart]);

    useEffect(() => {
        if (newProduct === null) return;

        const create = async () => {
            await api.createProduct("products", newProduct);
        };
        create();
    }, [newProduct]);

    useEffect(() => {
        if (newItemInCart === null) return;
        const create = async () => {
            await api.createProduct("cart", newItemInCart);
        };
        create();
    }, [newItemInCart]);

    useEffect(() => {
        if (editComleteProd === null) return;
        const res = async () => {
            const prod = await api.editProduct(
                "products",
                editComleteProd,
                currentPage
            );
            setData(prod);
            setEditProduct(null);
        };
        res();
    }, [editComleteProd]);

    useEffect(() => {
        if (editCart === null) return;
        const res = async () => {
            const prod = await api.editProduct("cart", editCart);
            setDataCart(prod);
        };
        res();
    }, [editCart]);

    useEffect(() => {
        if (delId === null) return;
        const res = async () => {
            const prod = await api.deleteProduct(
                "products",
                delId,
                currentPage
            );
            setData(prod);
        };
        res();
    }, [delId]);

    useEffect(() => {
        if (delCarId === null) return;
        const res = async () => {
            const prod = await api.deleteProduct("cart", delCarId);

            setDataCart(prod);
        };
        res();
    }, [delCarId]);

    const onPageChange = (page) => {
        setCurrrentPage((prev) => prev = page);
    };

    const sendDataProduct = (product) => {
        setCurrrentPage((prev) => prev = 1);
        setNewProduct(product);
    };

    const handleEditProduct = (product) => {
        setEditProduct(product);
    };
    const handleCompleteEditProduct = (product) => {
        setEditComleteProd(product);
        setEditProduct(null);
    };

    const handleAddToCart = (item) => {
        if (item.quantity) {
            let quantity = item.quantity + 1;
            const editCart = { ...item, quantity };
            console.log("quantity");
            console.log(quantity);
            console.log("editCart");
            console.log(editCart);
            return setEditCart(editCart);
        }
        const { id, title, description, price, img } = item;
        const cartItem = {
            id,
            title,
            description,
            price,
            img,
            quantity: 1,
        };
        const editProd = { ...item, inCart: true };

        setNewItemInCart(cartItem);
        setChangeLengthCart((prev) => +prev + 1);
        handleCompleteEditProduct(editProd);
    };

    const handleMinusItemInCart = (item) => {
        if (item.quantity>0) {
            let quantity = +item.quantity - 1;
            const editCart = { ...item, quantity };
            return setEditCart(editCart);
        }
    }

    const handleDelete = (id) => {
        setDelId(id);
        setChangeLength((prev) => +prev + 1);
    };

    const handleDeleteCart = (item) => {
        const { id, title, description, price, img } = item;
        const editItem = {
            id,
            title,
            description,
            price,
            img,
            inCart: false,
        };

        setDelCarId(item.id);
        handleCompleteEditProduct(editItem);
        setChangeLengthCart((prev) => Number(prev) - 2);
    };

    return (
        <>
            <div className="Container">
                <Header totalCurtItemsCount={totalCurtItemsCount} />
                <Switch>
                    <Route path="/" exact>
                        {!data ? (
                            <Spinner />
                        ) : (
                            <Catalog
                                totalItemsCount={totalItemsCount}
                                data={data}
                                currentPage={currentPage}
                                onPageChange={onPageChange}
                                handleAddToCart={handleAddToCart}
                                handleDelete={handleDelete}
                                handleEditProduct={handleEditProduct}
                            />
                        )}
                    </Route>
                    <Route path="/product">
                        {!data ? <Spinner /> : <Product />}
                    </Route>
                    <Route path="/cart">
                        {!dataCart ? (
                            <Spinner />
                        ) : (
                            <Cart
                                handleAddToCart={handleAddToCart}
                                handleDeleteCart={handleDeleteCart}
                                dataCart={dataCart}
                                handleMinusItemInCart={handleMinusItemInCart}
                            />
                        )}
                    </Route>
                    <Route path="/newproduct">
                        <NewProduct
                            sendDataProduct={sendDataProduct}
                            handleCompleteEditProduct={
                                handleCompleteEditProduct
                            }
                            editProduct={editProduct}
                        />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
