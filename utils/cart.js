import { find, set, remove } from 'lodash'
export const initCart = async () => {
    const cartItem = JSON.stringify([]);
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
        const carts = await getCart()

        let cartItem = find(carts, { id: item.id });
        if (cartItem) {
            if (quantity == 0) {
                remove(carts, { id: item.id })
            } else {
                set(find(carts, { id: item.id }), 'quantity', quantity)
            }
        } else {
            carts.push({
                id: item.id,
                name: item.name,
                price: item.price,
                quantity: quantity
            })
        }

        await localStorage.setItem(`${process.env.NEXT_PUBLIC_APP_NAME}CART`, JSON.stringify(carts))
    }
}