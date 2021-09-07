import React from 'react';
import { useStyles } from './styles'
import MenuItem from './item';
import MenuHeader from './header';
import { List } from '@material-ui/core';


const ResMenu = ({ menuData, scrollId }) => {
    const classes = useStyles();
    const itemRefs = React.useRef([]);

    React.useEffect(() => {
        if (scrollId && itemRefs.current) {
            itemRefs.current[scrollId].scrollIntoView();
        }
    }, [scrollId])

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
        </div>
    );
}

export default ResMenu