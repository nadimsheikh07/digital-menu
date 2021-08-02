import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import HideOnScroll from './HideOnScroll';
import ScrollTop from './ScrollTop';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../config/theme'

const Index = (props) => {
    const { title, children, action } = props;

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar>
                    <Toolbar>
                        <Typography variant="h6">{title}</Typography>
                        {action}
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Toolbar id="back-to-top-anchor" />
            <Container>
                {children}
            </Container>

            <ScrollTop {...props}>
                <Fab color="secondary" size="small" aria-label="scroll back to top">
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </ThemeProvider>
    );
}

export default Index