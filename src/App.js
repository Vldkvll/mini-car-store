import Header from "./Components/Header/Header";
import Catalog from "./Components/Catalog/Catalog";
import { Route, Switch } from "react-router-dom";

import "./App.css";
import Cart from "./Components/Cart/Cart";
import Product from "./Components/Product/Product";

function App() {
    return (
        <div className="Container">
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Catalog />
                </Route>
                <Route path="/product">
                    <Product />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
            </Switch>
        </div>
    );
}

export default App;
