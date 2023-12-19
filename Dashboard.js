import React, { useState } from 'react';
import './Dashboard.css'
import Sidebar from './Sidebar';
import starWars from './sukdev.png'
import TextField from '@mui/material/TextField';
import SearchIcon from '@mui/icons-material/Search';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';
import dashBoardImage from './loki.png'
import axios from 'axios'
import MovieCard from './CardComp';
import CircularProgress from '@mui/material/CircularProgress';
import GridLisstComp from './GridList';
import CustomTable from './TableComp';



const Dashboard = () => {
    const [loading, setLoading] = useState({ fetchList: false });
    const [showList, setShowList] = useState({ type: '', status: false });
    const [lists, setLists] = useState([]);
    const [isGridSelected, setIsGridSelected] = useState(true);

    const handleGridClick = () => {
        setIsGridSelected(true);
    };

    const handleListClick = () => {
        setIsGridSelected(false);
    };

    const getListContent = async () => {
        setLoading((prev) => ({ ...prev, fetchList: true }))
        try {
            const url = `https://swapi.dev/api/${showList?.type}/`;
            const method = 'GET';

            const response = await axios({
                method,
                url,
            });

            if (response?.status == 200) {
                setLoading((prev) => ({ ...prev, fetchList: false }))
                setLists(response?.data?.results)
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    return (

        <div className='dashboard_wrapper'>
            <div className='__header'>
                <img src={starWars} alt="StarWars" />
                {showList?.status && <TextField
                    variant="outlined"
                    placeholder='Search'
                    className='__textfield'
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>
                    }}
                />}
            </div>
            <div style={{ display: 'flex' }}>
                <div className='__sidebar'>
                    <Sidebar loading={loading} setLoading={setLoading} showList={showList} setShowList={setShowList} getListContent={getListContent} lists={lists} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    {showList?.status ? <div>
                        {loading?.fetchList ? <div className='__loader'>
                            <CircularProgress color="success" />
                            <Typography style={{ color: 'white' }}>Loading...</Typography>
                        </div> : <>
                            <div className='__list_header'>
                                <Typography style={{ color: 'white', fontWeight: "600", fontSize: '20px' }}>{showList?.type.toUpperCase()}</Typography>
                                <div>
                                    <GridLisstComp isGridSelected={isGridSelected} handleGridClick={handleGridClick} handleListClick={handleListClick} />
                                </div>
                            </div>
                            {isGridSelected ? <div className='__list_wrapper'>
                                {lists?.map((item) => (
                                    <MovieCard title={showList?.type == 'films' ? item?.title : item?.name} key={item?.title} itemDetails={item} />
                                ))}
                            </div> : <div className='__table_wrapper'>
                                <CustomTable lists={lists} />
                            </div>}
                        </>
                        }
                    </div> : <div className='__dashboard_content'>
                        <img src={dashBoardImage} alt="StarWars" />
                        <Typography variant='h3' style={{ color: '#3B3F5C', fontWeight: "600" }}>Welcome to Star Wars Dashboard</Typography>
                        <Typography variant='body2' style={{ color: '#3B3F5C' }}>Star Wars is an American epic space opera multimedia franchise created by George Lucas, which began with the eponymous 1977 film and quickly became a worldwide pop culture phenomenon.</Typography>
                    </div>}
                </div>
            </div>
        </div>

    )
}


export default Dashboard;