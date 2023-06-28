import produceData from "../../mockData/produce.json";

const POPULATE = "produce/POPULATE";
const LIKE_UNLIKE = "produce/LIKE_UNLIKE_PRODUCT";

export const populateProduce = () => {
    return {
        type: POPULATE,
        produce: produceData,
    };
};

export const likeUnlikeProduct = (productId) => {
    return {
        type: LIKE_UNLIKE,
        productId,
    };
};

export const getAllProduce = (state) => Object.values(state.produce);

export const produceReducer = (state = {}, action) => {
    switch (action.type) {
        case POPULATE:
            const newState = {};
            action.produce.forEach((product) => {
                newState[product.id] = product;
            });
            return newState;

        case LIKE_UNLIKE:
            const nextState = { ...state };
            const id = action.productId;
            nextState[id].liked = !nextState[id].liked;
            return nextState;

        default:
            return state;
    }
};
