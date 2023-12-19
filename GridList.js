import React, { useState } from 'react';
import { GridOn, ViewList } from '@mui/icons-material';
import './Dashboard.css'
import { Typography } from '@mui/material';


const GridLisstComp = ({handleGridClick,handleListClick,isGridSelected}) => {

  return (
    <div className='__grid_wrapper' style={{cursor:'pointer'}}>
      <div
        onClick={handleListClick}
        style={{display:'flex'}}
        className={!isGridSelected?'__selected':'__normal'}
      >
        <ViewList style={{color:isGridSelected?'white':'grey'}}/>
        <Typography style={{color:isGridSelected?'white':'grey'}}>List</Typography>
      </div>
      <div
        onClick={handleGridClick}
        className={!isGridSelected?'__normal':'__selected'}
      >
        <GridOn style={{color:isGridSelected?'grey':'white'}} />
        <Typography style={{color:isGridSelected?'grey':'white'}}>Grid</Typography>
      </div>
    </div>
  );
};

export default GridLisstComp;
