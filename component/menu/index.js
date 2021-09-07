import React from 'react';
import { useStyles } from './styles'
import MenuItem from './item';
import MenuHeader from './header';
import { Fab, List, ListItem, ListItemText, Popover } from '@material-ui/core';


const ResMenu = ({ menuData }) => {
    const classes = useStyles();
    const itemRefs = React.useRef([]);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;


    const scrollTo = (id) => {
        if (itemRefs.current) {
            itemRefs.current[id].scrollIntoView();
        }
        handleClose()
    }

    return (
        <div className={classes.root}>

            <List className={classes.list} component="nav" subheader={<li />}>
                {menuData && menuData.map((menu) => (
                    <li key={`list-${menu.id}`} className={classes.listItem} ref={el => (itemRefs.current[menu.id] = el)}>
                        <ul className={classes.ul}>
                            <MenuHeader data={menu} />
                            {menu?.items.map((item) => (
                                <MenuItem key={`list-item-${menu.id}-${item.id}`} data={item} />
                            ))}
                        </ul>
                    </li>
                ))}
            </List>

            <Fab color="primary" className={classes.menuBtn} onClick={handleClick}>
                Menu
            </Fab>

            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                }}
            >

                <List>
                    {menuData && menuData.map((menu) => (
                        <ListItem key={`list-${menu.id}`} onClick={() => scrollTo(menu.id)}>
                            <ListItemText primary={menu.name} />
                        </ListItem>
                    ))}
                </List>
            </Popover>
        </div>
    );
}

export default ResMenu