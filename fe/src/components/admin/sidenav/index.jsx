import { Box, Drawer, Hidden } from "@mui/material";
import React, { Fragment } from "react";
import SidenavData from "./sidenavData";
import "./style.css";

const SideNav = props => {
    const drawerWidth = 260;

    return(
        <Fragment>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
                className="box-sidenav"
            >
                <Hidden mdUp implementation="css">
                    <Drawer
                        variant="temporary"
                        open={props.mobileOpen}
                        onClose={props.handleDrawerToggle}
                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                        sx={{
                            display: { xs: 'block', md: 'none' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                        }}
                    >
                        <SidenavData handleDrawerClose={props.handleDrawerClose} />
                    </Drawer>
                </Hidden>
                <Hidden mdDown implementation="css">
                    <Drawer
                        variant="permanent"
                        sx={{
                            display: { xs: 'none', md: 'block' },
                            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth, marginTop: '65px' },
                        }}
                        open
                    >
                        <SidenavData handleDrawerClose={props.handleDrawerClose} />
                    </Drawer>
                </Hidden>
            </Box>
        </Fragment>
    )
}

export default SideNav;