import { find, set, remove } from 'lodash'
export const initCart = async (orgCode) => {
    const cartItem = JSON.stringify([]);
    if (process.browser) {
        await localStorage.setItem(`${process.env.NEXT_PUBLIC_APP_NAME}${orgCode}CART`, cartItem)
    }
}

export const getCart = async (orgCode) => {
    if (process.browser) {
        const cart = await localStorage.getItem(`${process.env.NEXT_PUBLIC_APP_NAME}${orgCode}CART`)
        if (cart) {
            const cartItem = JSON.parse(cart)
            return cartItem
        }
    }
    return null
}

export const addToCart = async (orgCode, item, quantity) => {
    if (process.browser) {
        const carts = await getCart(orgCode)

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

        await localStorage.setItem(`${process.env.NEXT_PUBLIC_APP_NAME}${orgCode}CART`, JSON.stringify(carts))
    }
}