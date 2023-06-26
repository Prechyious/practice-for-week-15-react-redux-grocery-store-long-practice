const ADD_PRODUCT = "cart/ADD_TO_CART";
const REMOVE_PRODUCT = "cart/REMOVE_ITEM";
const INCREMENT_COUNT = "cart/INCREMENT_ITEM";
const DECREMENT_COUNT = "cart/DECREMENT_ITEM";
const INPUT_COUNT = "cart/INPUT_COUNT";
const EMPTY_CART = "cart/EMPTY_CART";

export const addToCart = (productId) => {
    return {
        type: ADD_PRODUCT,
        productId,
    };
};

export const removeItem = (productId) => {
    return {
        type: REMOVE_PRODUCT,
        productId,
    };
};

export const incrementItem = (productId) => {
    return {
        type: INCREMENT_COUNT,
        productId,
    };
};

export const decrementItem = (productId) => {
    return {
        type: DECREMENT_COUNT,
        productId,
    };
};

export const inputCount = (productId, count) => {
    return {
        type: INPUT_COUNT,
        productId,
        count,
    };
};

export const emptyCart = () => {
    return {
        type: EMPTY_CART,
    };
};

export const cartReducer = (state = {}, action) => {
    const id = action.productId;
    const nextState = { ...state };

    switch (action.type) {
        case ADD_PRODUCT:
            nextState[id]
                ? nextState[id].count++
                : (nextState[id] = { id: id, count: 1 });
            return nextState;

        case REMOVE_PRODUCT:
            delete nextState[id];
            return nextState;

        case INCREMENT_COUNT:
            nextState[id].count++;
            return nextState;

        case DECREMENT_COUNT:
            nextState[id].count > 0
                ? nextState[id].count--
                : delete nextState[id];
            return nextState;

        case INPUT_COUNT:
            const newCount = action.count;
            nextState[id].count = newCount;
            return nextState;

        case EMPTY_CART:
            return {};

        default:
            return state;
    }
};
