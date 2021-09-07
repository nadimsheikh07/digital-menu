import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Fab from '@material-ui/core/Fab';
import MenuIcon from '@material-ui/icons/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';

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

export default function AppFooter({ openMenu }) {
    const classes = useStyles();

    return (
        <AppBar position="fixed" color="primary" className={classes.appBar}>
            <Toolbar>

                <Fab color="secondary" aria-label="add" className={classes.fabButton} onClick={(e) => { openMenu(e) }}>
                    <MenuIcon />
                </Fab>
                <div className={classes.grow} />

                {/* <IconButton edge="end" color="inherit">
                    <MoreIcon />
                </IconButton> */}
            </Toolbar>
        </AppBar>
    );
}
