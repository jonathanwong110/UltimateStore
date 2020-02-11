export default function manageCart (state = {
    cart: []
}, action) {
    switch (action.type) {
        case 'ADD_TO_CART':
            let addedProduct = Object.values(action.payload)
                let oldCart = localStorage.getItem('cartproducts') ? JSON.parse(localStorage.getItem('cartproducts')).cart : []
                localStorage.setItem('cartproducts', JSON.stringify({
                    ...state,
                    cart: [...state.cart, addedProduct, ...oldCart]
                }))
            return {
                    ...state,
                    cart: [...state.cart, addedProduct]
            }
        case 'REMOVE_FROM_CART':
            let currentCart = JSON.parse(localStorage.cartproducts).cart
            currentCart = currentCart.filter(cartproduct => cartproduct[0] !== action.payload)
            localStorage.setItem('cartproducts', JSON.stringify({
                cart: currentCart
            }))
            return {
                ...state,
                cart: [...state.cart]
        }
        default:
            return state
    }
}
