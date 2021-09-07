import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles({
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});

export default function AppFooter({ openMenu, carts, phone }) {
    const classes = useStyles();

    let showOrder = false
    if (carts && carts.length) {
        showOrder = true
    }


    const sendOrder = () => {
        let message = 'Please Take My Order \n'
        if (carts) {
            carts.forEach(element => {
                message += `${element.name} = ${element.quantity} \n`
            });
        }
        const text = encodeURI(message)
        const url = `${process.env.NEXT_PUBLIC_WHATSAPP_URL}?phone=${phone}&text=${text}`
        window.open(url, '_blank', 'noopener,noreferrer')
    }

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>

                <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={(e) => { openMenu(e) }}>
                    <MenuIcon />
                </Fab>
                <div className={classes.grow} />

                {showOrder && <IconButton edge="end" color="inherit" onClick={() => sendOrder()}>
                    <WhatsAppIcon />
                </IconButton>}
            </Toolbar>
        </AppBar>
    );
}
