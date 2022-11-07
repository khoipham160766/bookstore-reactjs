import { Button, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import React, { Fragment } from "react";
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StarsIcon from '@mui/icons-material/Stars';
import CategoryIcon from '@mui/icons-material/Category';
import BadgeIcon from '@mui/icons-material/Badge';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ImportExportIcon from '@mui/icons-material/ImportExport';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import { NavLink } from "react-router-dom";
import "./style.css";

const SidenavData = props => {
    const listItemData = [
        {
            icon:<DashboardIcon/>,
            label: "Tổng quan",
            link: "/dashboard"
        },
        {
            icon:<AutoStoriesIcon/>,
            label: "Quản lý sách",
            link: "/books"
        },
        {
            icon:<CategoryIcon/>,
            label: "Quản lý danh mục",
            link: "/categories"
        },
        {
            icon:<StarsIcon/>,
            label: "Quản lý khách hàng",
            link: "/customers"
        },
        {
            icon:<BadgeIcon/>,
            label: "Quản nhân viên",
            link: "/employees"
        },
        {
            icon:<AccountBalanceWalletIcon/>,
            label: "Quản lý hóa đơn",
            link: "/orders"
        },
        {
            icon:<ImportExportIcon/>,
            label: "Quản lý nhập hàng",
            link: "/imports"
        },
        {
            icon:<NewspaperIcon/>,
            label: "Bài viết",
            link: "/news"
        },
        {
            icon:<ChatBubbleOutlineIcon/>,
            label: "Phản hồi",
            link: "/feedback"
        },
        {
            icon:<EqualizerIcon/>,
            label: "Thống kê",
            link: "/statistical"
        },
    ]
    return(
        <Fragment>
            <List className="side-nav-data">
                {
                    listItemData.map((item,index)=>(
                        <Button key={index} className="side-nav-data-button" onClick={props.handleDrawerClose}>
                            <ListItem component={NavLink} to={`/admin${item.link}`} className="admin-nav-link-custom">
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.label}</ListItemText>
                            </ListItem>
                        </Button>
                    ))
                }
            </List>
        </Fragment>
    )
}

export default SidenavData;