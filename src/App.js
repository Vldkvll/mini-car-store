import Header from "./Components/Header/Header";
import Catalog from "./Components/Catalog/Catalog";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Product/Product";
import { api } from "./api/api";
import { useEffect, useState } from "react";
import Spinner from "./Components/Spinner/Spinner";
import Footer from "./Components/Footer/Footer";

const test = {
    id: "bix27468fjc",
    title: "Audi",
    description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, qui?",
    price: 100,
    inCart: true,
};

function App() {
    const [totalItemsCount, setTotalItemsCount] = useState("");
    const [data, setData] = useState("");
    const [currentPage, setCurrrentPage] = useState(1);

    useEffect(() => {
        const res = async () => {
            const prod = await api.getProduct("products");
            setTotalItemsCount(prod.length);
        };
        res();
    }, []);

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

    // useEffect(() => {
    //     const res = async () => {
    //         const prod = await api.editProduct("products");
    //         setData(prod);
    //     };
    //     res();
    // }, []);
    console.log(data);

    const onPageChange = (page) => {
        console.log(page);
        setCurrrentPage((prev) => (prev = page));
    };
    const handleAddToCart= ()=> {

    }

    // if (!data) return <Spinner />;
    return (
        <>
            <div className="Container">
                <Header />
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
                            />
                        )}
                    </Route>
                    <Route path="/product">
                        {!data ? <Spinner /> : <Product />}
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </>
    );
}

export default App;
