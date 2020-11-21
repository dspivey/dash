import { AppBar, IconButton, Toolbar, Typography, } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';


const useStyles = makeStyles((theme) => (
    {
        root: {
            flexGrow: 1,
            marginBottom: theme.spacing(3),
        },
        menuButton: {
            marginRight: theme.spacing(2),
        },
        title: {
            flexGrow: 1,
        },
    }
));

// TODO: Add logo to navbar
// TODO: Add links / menus as needed to menubar (or remove hamburger menu)
export default function NavBar(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar color="default" position="static">
                <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        Data Vulcans
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}