import { Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core"
import VegSign from './vegSign'
const Item = ({ data }) => {
    const { name, price, image } = data
    return (
        <ListItem key={name}>
            <ListItemAvatar>
                <Avatar
                    alt={name}
                    src={image}
                />
            </ListItemAvatar>
            <ListItemText id={name} primary={name} secondary={price} />
            {/* <ListItemSecondaryAction>
                <VegSign item={data} />
            </ListItemSecondaryAction> */}
        </ListItem>
    )
}

export default Item