import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import { Typography } from '@mui/material';

const DeleteConfirmationDialog = ({ open, setOpenDialog, movieName }) => {
    const handleCancel = () => {
        setOpenDialog(false);
    };

    const handleDelete = () => {
        console.log(`Deleting movie: ${movieName}`);
    };

    return (
        <Dialog open={open} onClose={() => setOpenDialog(false)} className='__deleteModal'>
            <DialogTitle>
                <div className='___caution'>
                    <ErrorOutlineIcon color="error" fontSize="large" />
                    <Typography> Caution!</Typography>
                </div>
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <div style={{ display: 'flex' }}>
                        <Typography>{`Are you sure you want to Delete`}</Typography><Typography>&nbsp;</Typography> <Typography style={{ fontWeight: '800' }}> {movieName?.toUpperCase()}?</Typography>
                    </div>
                </DialogContentText>
            </DialogContent>
            <DialogActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Button onClick={handleCancel} style={{ color: 'unset', backgroundColor: 'unset', width: '180px', borderRadius: '8px' }} variant="contained">
                    Cancel
                </Button>
                <Button onClick={handleDelete} style={{ backgroundColor: '#FC5A5A', width: '180px', borderRadius: '8px' }} color="error" variant="contained">
                    Yes
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default DeleteConfirmationDialog;
