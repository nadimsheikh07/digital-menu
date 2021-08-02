import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',        
        backgroundColor: theme.palette.background.paper,        
        overflow: 'auto',
        maxHeight: 600,
    },
    listSection: {
        backgroundColor: 'inherit',
    },
    ul: {
        backgroundColor: 'inherit',
        padding: 0,
    },
}));