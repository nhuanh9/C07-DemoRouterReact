const initialState = [
    { id: 1, name: 'A'},
    { id: 2, name: 'L'},
    { id: 3, name: 'B' }
]
export default function productsReducer(initState = initialState, action) {
    if (action.type == 'products/add') {
        return [...initState, action.payload]
    }
    return initState;
}
