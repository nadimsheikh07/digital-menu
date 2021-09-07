import React from 'react'
import { Avatar, Button, ButtonGroup, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core"
import VegSign from './vegSign'
import { find } from 'lodash'
import { addToCart } from '../../utils/cart'
const Item = ({ data, carts, setUpdateCart }) => {
    const { name, price, image } = data

    const itemAddToCart = (quantity) => {
        addToCart(data, quantity)
        setUpdateCart(true)
    }

    let cartItem = find(carts, { id: data.id });    

    const SecondaryText = () => {
        return (
            <>
                <VegSign item={data} />
                <span style={{ marginTop: 3, marginLeft: 10, position: "absolute" }}>{price}</span>
            </>
        )
    }

    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar
                    alt={name}
                    src={image}
                />
            </ListItemAvatar>
            <ListItemText id={name} primary={name} secondary={<SecondaryText />} />

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