import { Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core"
import VegSign from './vegSign'
const Item = ({ data }) => {
    const { name, price, image } = data
    return (
        <ListItem button>
            <ListItemAvatar>
                <Avatar
                    alt={name}
                    src={image}
                />
            </ListItemAvatar>
            <ListItemText id={name} primary={name} secondary={price} />
            <VegSign item={data} />
            <ListItemSecondaryAction>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Item