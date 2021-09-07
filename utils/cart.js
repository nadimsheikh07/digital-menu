import { find } from 'lodash'
export const initCart = async () => {
    const cartItem = JSON.stringify([{
        "id": "veg-pizza",
        "name": "Veg Pizza",
        "price": 100,
        "quantity": 2
    }]);
    if (process.browser) {
        await localStorage.setItem(`${process.env.NEXT_PUBLIC_APP_NAME}CART`, cartItem)
    }
}

export const getCart = async () => {
    if (process.browser) {
        const cart = await localStorage.getItem(`${process.env.NEXT_PUBLIC_APP_NAME}CART`)
        if (cart) {
            const cartItem = JSON.parse(cart)
            return cartItem
        }
    }
    return null
}

export const addToCart = async (item, quantity) => {
    if (process.browser) {
        let finalCart = []
        const carts = await getCart()
        let cartItem = find(carts, { id: item.id });
        if (cartItem) {
            finalCart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: cartItem.quantity + quantity
            })
        } else {
            finalCart.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: quantity
            })
        }
        await localStorage.setItem(`${process.env.NEXT_PUBLIC_APP_NAME}CART`, JSON.stringify(finalCart))
    }
}