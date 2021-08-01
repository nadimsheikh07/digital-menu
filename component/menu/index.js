import React from 'react';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useStyles } from './styles'
import MenuData from '../../data/menu.json'
import ListItem from './item';
const ResMenu = () => {
    const classes = useStyles();
    return (
        <List className={classes.root} subheader={<li />}>
            {MenuData.map((menu) => (
                <li key={`section-${menu.className}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>{menu.name}</ListSubheader>
                        {menu?.items.map((item) => (
                            <ListItem key={`item-${menu.name}-${item.name}`} data={item} />
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
}

export default ResMenu