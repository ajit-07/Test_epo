import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import Button from '@mui/material/Button';
import CloseIcon from '@mui/icons-material/Close';
import { Typography } from '@mui/material';
import dashBoardImage from './loki.png';

const ViewItemDialog = ({ open, setOpenDialog, movieDetails }) => {
    const handleCancel = () => {
        setOpenDialog(false);
    };

    return (
        <Dialog open={open} onClose={() => setOpenDialog(false)} className="__deleteModal" PaperProps={{ style: { width: '400px', height: '1004px', backgroundColor: '#03123D', color: 'white' } }}>
            <DialogTitle style={{ padding: '10px', borderBottom: '1px solid white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="h6">Movie Details</Typography>
                <CloseIcon onClick={handleCancel} style={{ cursor: 'pointer', color: 'white' }} />
            </DialogTitle>
            <DialogContent>
                <img src={dashBoardImage} alt={'Image'} style={{ width: '100%', height: '275px', objectFit: 'cover', marginTop: '30px' }} />
                <Typography variant="body1" style={{ marginTop: '10px' }}>Title</Typography>
                <div style={{padding:'1px', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px', width: '350px', height: '44px', borderRadius: '8px', border: '1px', backgroundColor: 'white' }}>
                    <Typography title={movieDetails?.title} style={{ color: 'black', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{movieDetails?.title}</Typography>
                </div>
                <Typography variant="body1" style={{ marginTop: '10px' }}>Opening Crawl</Typography>
                <div style={{padding:'1px',  display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px', width: '350px', height: '74px', borderRadius: '8px', border: '1px', backgroundColor: 'white' }}>
                    <Typography title={movieDetails?.opening_crawl} style={{ color: 'black', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{movieDetails?.opening_crawl}</Typography>
                </div>
                <Typography variant="body1" style={{ marginTop: '10px' }}>Genere</Typography>
                <div style={{padding:'1px',  display: 'flex', justifyContent: 'flex-start', alignItems: 'center', marginTop: '10px', width: '350px', height: '44px', borderRadius: '8px', border: '1px', backgroundColor: 'white' }}>
                    <Typography title={movieDetails?.director} style={{ color: 'black', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{movieDetails?.director}</Typography>
                </div>
            </DialogContent>
            <DialogActions style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '10px', borderTop: `1px solid white` }}>
                <Button onClick={handleCancel} style={{ backgroundColor: '#CB1A80', width: '400px', borderRadius: '8px' }} variant="contained">
                    Close
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default ViewItemDialog;
