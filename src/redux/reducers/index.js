const initialState = {
    invokeStatus: false,
    data: null
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_INVOKE_STATUS':
            return {
                ...state,
                invokeStatus: action.payload
            };
        case 'SET_DATA':
            return {
                ...state,
                data: action.payload
            };

        default:
            return state;
    }
};

export default reducer;
