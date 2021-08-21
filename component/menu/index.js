import React from 'react';
import List from '@material-ui/core/List';
import { useStyles } from './styles'
import MenuItem from './item';
import MenuHeader from './header';
import { Fab } from '@material-ui/core';


const ResMenu = ({ menuData }) => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <List className={classes.list} component="nav" subheader={<li />}>
                {menuData && menuData.map((menu) => (
                    <li key={`list-${menu.id}`} className={classes.listItem}>
                        <ul className={classes.ul}>
                            <MenuHeader data={menu} />
                            {menu?.items.map((item) => (
                                <MenuItem key={`list-item-${menu.id}-${item.id}`} data={item} />
                            ))}
                        </ul>
                    </li>
                ))}
            </List>

            {/* <Fab color="primary" aria-label="add" className={classes.menuBtn}>
                Menu
            </Fab> */}
        </div>
    );
}

export default ResMenu