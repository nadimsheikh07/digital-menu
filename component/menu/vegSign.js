import Icon from '@material-ui/core/Icon';
import { green, red, orange } from '@material-ui/core/colors';

const VegSign = ({ item }) => {
    let color
    if (item.veg) {
        color = green[500]
    } else {
        if (item.egg) {
            color = orange[500]
        } else {
            color = red[500]
        }
    }
    return (
        <Icon style={{ color: color }}>adjust</Icon>
    )
}

export default VegSign