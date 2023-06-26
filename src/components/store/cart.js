const ADD_PRODUCT = "cart/ADD_PRODUCT";
const REMOVE_PRODUCT = "cart/REMOVE_PRODUCT";

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
        default:
            return state;
    }
};
