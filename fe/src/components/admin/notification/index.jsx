import React, { Fragment,useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import { Avatar, Badge, IconButton, ListItem, List, ListItemIcon, ListItemText } from "@mui/material";
import "./style.css";

const NotificationAdmin = () =>  {
    const DropDownData=  [
        {
            name: "Khôi",
            content: "Khôi ngô tuấn tú"
        },
        {
            name: "Tùng",
            content: "Tùng thủ khoa"
        }
    ]

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    return(
        <Fragment>
            <Box>
                <IconButton
                    id="basic-button"
                    aria-controls={open ? 'notification-list' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="text-button"
                >
                    <Badge badgeContent={4}>
                        <NotificationsActiveIcon />
                    </Badge>
                </IconButton>
                <Menu
                    id="notification-list"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    <List className="style-list-notificaion">
                        {
                            DropDownData.map((item,index)=> (
                                <MenuItem key={index} component={ListItem} onClick={handleClose}>
                                    <ListItemIcon>
                                        <Avatar>{item.name[0].toUpperCase()}</Avatar>
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={item.name}
                                        secondary={item.content}
                                    >
                                    </ListItemText>
                                </MenuItem>
                            ))
                        }
                    </List>
                </Menu>
            </Box>
        </Fragment>
    )
}

export default NotificationAdmin;