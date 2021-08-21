import React from 'react';
import List from '@material-ui/core/List';
import { useStyles } from './styles'
import MenuItem from './item';
import MenuHeader from './header';

const ResMenu = ({ menuData }) => {
    const classes = useStyles();
    return (
        <List className={classes.root} component="nav" subheader={<li />}>
            {menuData && menuData.map((menu) => (
                <li key={`list-${menu.id}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <MenuHeader data={menu} />
                        {menu?.items.map((item) => (
                            <MenuItem key={`list-item-${menu.id}-${item.id}`} data={item} />
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
}

export default ResMenu