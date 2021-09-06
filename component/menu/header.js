import { ListSubheader } from "@material-ui/core"
import { useStyles } from "./styles";

const Item = ({ data }) => {
    const classes = useStyles();
    const { name } = data
    return (
        <ListSubheader className={classes.listHeader}>{name}</ListSubheader>
    )
}

export default Item