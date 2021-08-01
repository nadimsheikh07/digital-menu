import { ListSubheader } from "@material-ui/core"

const Item = ({ data }) => {
    const { name } = data
    return (
        <ListSubheader>{name}</ListSubheader>
    )
}

export default Item