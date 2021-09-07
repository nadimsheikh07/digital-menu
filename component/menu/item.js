import { Avatar, ListItem, ListItemAvatar, ListItemSecondaryAction, ListItemText } from "@material-ui/core"
import VegSign from './vegSign'
const Item = ({ data }) => {
    const { name, price, image } = data

    const SecondaryText = () => {
        return (
            <>
                <VegSign item={data} />
                <span style={{ marginTop: 7, marginRight: 10, position: "absolute" }}>{price}</span>
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
                add
            </ListItemSecondaryAction>
        </ListItem>
    )
}

export default Item