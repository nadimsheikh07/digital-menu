import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: 0
    },
    list: {
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        overflow: 'auto',
        maxHeight: 600,
    },
    listItem: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
    menuBtn: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
        '&:hover': {
            backgroundColor: theme.palette.secondary,
        },
    },
}));