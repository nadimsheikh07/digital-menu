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
    listHeader: {
        backgroundColor: 'inherit',
        fontSize: 15,
        fontWeight: "bolder"
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
        bottom: theme.spacing(10),
        // right: theme.spacing(20),
        alignItems: 'center',
        alignContent: 'center',
        textAlign: 'center',
        zIndex: 10,
        '&:hover': {
            backgroundColor: theme.palette.secondary,
        },
    },
}));