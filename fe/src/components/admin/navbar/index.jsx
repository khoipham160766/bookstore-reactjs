import React, { Fragment } from "react";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ProfileAdmin from "../profile";
import NotificationAdmin from "../notification";
import MenuIcon from '@mui/icons-material/Menu';
import "./style.css";
import { Hidden, IconButton } from "@mui/material";


const NavbarAdmin = props => {
    return(
        <Fragment>
            <Box sx={{ flexGrow: 1 }} className="navbar-admin-style">
                <AppBar position="fixed" className="appbar-style">
                    <Toolbar>
                        {/* <Hidden mdDown>
                            <Paper>xlDown</Paper>
                        </Hidden> */}
                        <Hidden mdUp>
                            <IconButton onClick={props.handleDrawerToggle}>
                                <MenuIcon className="menu-icon"/>
                            </IconButton>
                        </Hidden>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} >
                            TBOOK ADMIN
                        </Typography>
                        <NotificationAdmin/>
                        <ProfileAdmin/>
                    </Toolbar>
                </AppBar>
            </Box>
        </Fragment>
    )
}

export default NavbarAdmin;