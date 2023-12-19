import React, { useState } from 'react';
import './Dashboard.css';
import Typography from '@mui/material/Typography';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import dashBoardImage from './loki.png';
import MyPopover from './MenuItemPopup';

const MovieCard = ({ title,itemDetails }) => {
    const [anchorEl, setAnchorEl] = useState(null);
    return (
        <div className='card_wrapper'>
            <div className='__card_content'>
                <img src={dashBoardImage} alt="StarWars" style={{ width: '18rem', height: '11rem' }} />
            </div>
            <div className='__card_footer'>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px' }}>
                    <GroupWorkIcon style={{ color: 'white' }} />
                    <Typography style={{ color: 'white' }}>{title}</Typography>
                </div>
                <div className='__menu_item_icon'>
                    <MyPopover anchorEl={anchorEl} setAnchorEl={setAnchorEl} title={title} itemDetails={itemDetails} />
                </div>
            </div>
        </div>
    );
}

export default MovieCard;
