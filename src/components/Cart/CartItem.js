import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import {
    removeItem,
    incrementItem,
    decrementItem,
    inputCount,
} from "../store/cart";

function CartItem({ item }) {
    const [count, setCount] = useState(item.count);
    const dispatch = useDispatch();

    useEffect(() => {
        setCount(item.count);
    }, [item.count]);

    const handleDeleteItem = () => dispatch(removeItem(item.id));

    const handleIncrement = () => dispatch(incrementItem(item.id));

    const handleDecrement = () => dispatch(decrementItem(item.id));

    const handleInputIncrement = (e) =>
        dispatch(inputCount(item.id, parseInt(e.target.value)));

    return (
        <li className="cart-item">
            <div className="cart-item-header">{item.name}</div>
            <div className="cart-item-menu">
                <input
                    type="number"
                    value={count}
                    onChange={handleInputIncrement}
                />
                <button className="cart-item-button" onClick={handleIncrement}>
                    +
                </button>
                <button className="cart-item-button" onClick={handleDecrement}>
                    -
                </button>
                <button className="cart-item-button" onClick={handleDeleteItem}>
                    Remove
                </button>
            </div>
        </li>
    );
}

export default CartItem;
