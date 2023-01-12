const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_DATA_BEGIN':
            return {
                ...state,
                loading: true,
                error: false,
            }
        case 'LOAD_DATA_SUCCESS':
            const data = action.payload;
            return {
                ...state,
                ...data,
                loading: false,
                error: false,
            }
        case 'LOAD_DATA_ERROR':
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            break;
    }
}

export default reducer