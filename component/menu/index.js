import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import { useStyles } from './styles'
import MenuData from '../../data/menu.json'

const ResMenu = () => {
    const classes = useStyles();
    return (
        <List className={classes.root} subheader={<li />}>
            {MenuData.map((menu) => (
                <li key={`section-${menu.className}`} className={classes.listSection}>
                    <ul className={classes.ul}>
                        <ListSubheader>{menu.name}</ListSubheader>
                        {menu?.items.map((item) => (
                            <ListItem key={`item-${menu.name}-${item.name}`}>
                                <ListItemText primary={item.name} />
                            </ListItem>
                        ))}
                    </ul>
                </li>
            ))}
        </List>
    );
}

export default ResMenu