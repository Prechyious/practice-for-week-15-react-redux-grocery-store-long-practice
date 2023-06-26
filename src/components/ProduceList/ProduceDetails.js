import { useDispatch } from "react-redux";
import { addToCart } from "../store/cart";
import { likeUnlikeProduct } from "../store/produce";

function ProduceDetails({ produce }) {
    const dispatch = useDispatch();
    const cartItem = {};

    const handleAddToCart = () => {
        dispatch(addToCart(produce.id));
    };

    const handleLikeUnlike = () => {
        dispatch(likeUnlikeProduct(produce.id));
    };

    return (
        <li className="produce-details">
            <span>{produce.name}</span>
            <span>
                <button
                    className={
                        "like-button" + (produce.liked ? " selected" : "")
                    }
                    onClick={handleLikeUnlike}
                >
                    <i className={"fas fa-heart"} />
                </button>
                <button
                    className={"plus-button" + (cartItem ? " selected" : "")}
                    onClick={handleAddToCart}
                >
                    <i className="fas fa-plus" />
                </button>
            </span>
        </li>
    );
}

export default ProduceDetails;
