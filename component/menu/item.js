import React from 'react'
import { Avatar, Button, ButtonGroup, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core"
import { find } from 'lodash'
import { addToCart } from '../../utils/cart'
const Item = ({ data, carts, setUpdateCart, orgCode }) => {
    const { name, price, image } = data

    const itemAddToCart = (quantity) => {
        addToCart(orgCode, data, quantity)
        setUpdateCart(true)
    }

    let cartItem = find(carts, { id: data.id });

    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar
                    alt={name}
                    src={image}
                />
            </ListItemAvatar>
            <ListItemText id={name} primary={name} secondary={price} />

            <ListItemSecondaryAction>
                {!cartItem && <Button variant="contained" color="primary" onClick={() => itemAddToCart(1)}>Add</Button>}
                {cartItem &&
                    <ButtonGroup color="primary">
                        <Button variant="contained" color="secondary" onClick={() => itemAddToCart(cartItem.quantity - 1)}>-</Button>
                        <Button>{cartItem.quantity}</Button>
                        <Button variant="contained" color="primary" onClick={() => itemAddToCart(cartItem.quantity + 1)}>+</Button>
                    </ButtonGroup>}
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Item