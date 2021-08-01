import { Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText, Typography } from "@material-ui/core"

const Item = ({ data }) => {
    const { name, price, image } = data
    return (
        <ListItem key={name} button>
            <ListItemAvatar>
                <Avatar
                    alt={name}
                    src={image}
                />
            </ListItemAvatar>
            <ListItemText id={name} primary={name} />
            <ListItemSecondaryAction>
                <Typography>{price}</Typography>
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Item