import React from 'react';
import { useStyles } from './styles'
import MenuItem from './item';
import MenuHeader from './header';
import { List } from '@material-ui/core';


const ResMenu = ({ carts, menuData, scrollId, setUpdateCart,orgCode }) => {
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
                                <MenuItem orgCode={orgCode} setUpdateCart={setUpdateCart} carts={carts} key={`list-item-${menu.id}-${item.id}`} data={item} />
                            ))}
                        </ul>
                    </li>
                ))}
            </List>
        </div>
    );
}

export default ResMenu