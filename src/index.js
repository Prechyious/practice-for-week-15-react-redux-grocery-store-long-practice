import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";

import configStore from "./components/store";
import { populateProduce } from "./components/store/produce";
import { addToCart } from "./components/store/cart";

const store = configStore();

if (process.env.NODE_ENV !== "production") {
    window.store = store;
    window.populateProduce = populateProduce;
    window.addToCart = addToCart;
}

function Root() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(
    <React.StrictMode>
        <Root />
    </React.StrictMode>,
    document.getElementById("root")
);
