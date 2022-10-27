import React, { Fragment,useState } from "react";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Box from '@mui/material/Box';
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import ExitToAppSharpIcon from '@mui/icons-material/ExitToAppSharp';
import { Avatar, Button, ListItem, ListItemIcon, ListItemText } from "@mui/material";

const ProfileAdmin = () =>  {
    const DropDownData=  [
        {
            label: "Thông tin cá nhân",
            icon: <PersonSharpIcon/>
        },
        {
            label: "Đăng xuất",
            icon: <ExitToAppSharpIcon />
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
                <Button
                    id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                    className="text-button"
                    startIcon={<Avatar src="../../images/avatar-nobody.jpg"></Avatar>}
                >

                </Button>
                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                    'aria-labelledby': 'basic-button',
                    }}
                >
                    {
                        DropDownData.map((item,index)=> (
                            <MenuItem key={index} component={ListItem} onClick={handleClose}>
                                <ListItemIcon>{item.icon}</ListItemIcon>
                                <ListItemText>{item.label}</ListItemText>
                            </MenuItem>
                        ))
                    }
                </Menu>
            </Box>
        </Fragment>
    )
}

export default ProfileAdmin;