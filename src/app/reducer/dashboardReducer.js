const reducer = (state, action) => {
    switch (action.type) {
        case 'LOAD_DATA':
            console.log('loading data');
            return {
                ...state
            }
        
        default:
            break;
    }
}

export default reducer