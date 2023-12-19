import React, { useMemo, useState } from 'react';
import Popover from '@mui/material/Popover';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import MenuItem from '@mui/material/MenuItem';
import DownloadIcon from '@mui/icons-material/CloudDownload';
import RenameIcon from '@mui/icons-material/Edit';
import ShareIcon from '@mui/icons-material/Share';
import MoveIcon from '@mui/icons-material/Forward';
import MarkPrivateIcon from '@mui/icons-material/PrivacyTip';
import DeleteIcon from '@mui/icons-material/Delete';
import './Dashboard.css'
import { Visibility } from '@mui/icons-material';
import DeleteConfirmationDialog from './DeleteItem';
import ViewItemDialog from './ViewItem';


const options = [
    { label: 'View', icon: <Visibility /> },
    { label: 'Download', icon: <DownloadIcon /> },
    { label: 'Rename', icon: <RenameIcon /> },
    { label: 'ShareLink', icon: <ShareIcon /> },
    { label: 'Move', icon: <MoveIcon /> },
    { label: 'Mark Private', icon: <MarkPrivateIcon /> },
    { label: 'Delete', icon: <DeleteIcon style={{ color: 'red' }} /> },
];

const MyPopover = ({ anchorEl, setAnchorEl, title ,itemDetails}) => {
    const [openDialog, setOpenDialog] = useState(false);
    const [openViewDialog, setOpenViewDialog] = useState(false)
    const open = useMemo(() => Boolean(anchorEl), [anchorEl]);

    const handleClick = (event) => {
        setAnchorEl((prevAnchorEl) => (prevAnchorEl ? null : event.currentTarget));
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
            <MoreVertIcon style={{ color: 'white', cursor: 'pointer' }} onClick={handleClick} />
            <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                {options.map((option) => (
                    <MenuItem key={option.label} onClick={() => { option.label === "Delete" && setOpenDialog(true); option?.label == 'View' && setOpenViewDialog(true) }}>
                        <div className='__popover_content'>
                            <div className='__popover_label' style={{ color: option.label === 'Delete' ? 'red' : '' }}>
                                {option.label}
                            </div>
                            <div className='__popover_icon'>{option.icon}</div>
                        </div>
                    </MenuItem>
                ))}
            </Popover>
            {
                openDialog && <DeleteConfirmationDialog open={openDialog} setOpenDialog={setOpenDialog} movieName={title} />
            }
            {
                openViewDialog && <ViewItemDialog open={openViewDialog} setOpenDialog={setOpenViewDialog} movieName={title} movieDetails={itemDetails}/>
            }
        </>
    );
};


export default MyPopover;
