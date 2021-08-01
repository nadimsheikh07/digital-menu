import React from 'react';
import List from '@material-ui/core/List';
import { useStyles } from './styles'
import MenuData from '../../data/menu.json'
import MenuItem from './item';
import MenuHeader from './header';
const ResMenu = () => {
    const classes = useStyles();
    return (
        <List className={classes.root} subheader={<li />}>
            {MenuData.map((menu) => (
                <li key={`section-${menu.className}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <MenuHeader data={menu} />
                        {menu?.items.map((item) => (
                            <MenuItem key={`item-${menu.name}-${item.name}`} data={item} />
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
}

export default ResMenu