import { useEffect, useState } from "react";
import Cart from "./components/Cart";
import ProduceList from "./components/ProduceList";
import { populateProduce } from "./components/store/produce";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./components/store/cart";

function App() {
    const [showCart, setShowCart] = useState(false);
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart);

    useEffect(() => {
        dispatch(populateProduce());
    }, []);

    useEffect(() => {
        if (Object.keys(cartItems).length > 0) {
            setShowCart(true);
        }
    }, [cartItems]);

    const handleAddToCart = (productId) => {
        dispatch(addToCart(productId));
        setShowCart(true);
    };

    return (
        <>
            <nav>
                <h1>Grocery Store</h1>
                <button
                    className="checkout-button"
                    onClick={() => setShowCart(true)}
                >
                    <i className="fas fa-shopping-bag" />
                    Checkout
                </button>
            </nav>
            <main style={showCart ? { marginRight: "300px" } : {}}>
                <ProduceList onAddToCart={handleAddToCart} />
            </main>
            <div
                className="sidebar"
                style={showCart ? { transform: "translateX(-100%)" } : {}}
            >
                <div className="sidebar-header">
                    <button
                        className="arrow-button"
                        onClick={() => setShowCart(false)}
                    >
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
                <Cart />
            </div>
        </>
    );
}

export default App;
