import React, { useEffect, useState } from 'react';
import './Sidebar.css'
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import GroupWorkIcon from '@mui/icons-material/GroupWork';


const MovieAccordion = ({ movie }) => {
    return (
        <Accordion style={{ backgroundColor: 'unset' }}>
            <AccordionSummary>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <GroupWorkIcon style={{ color: 'white' }} />
                    <Typography style={{ color: 'white' }}>{movie}</Typography>
                </div>
                <div>
                    <ArrowForwardIosIcon style={{ color: 'white' }} />
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <Typography style={{ color: 'white' }}>
                </Typography>
            </AccordionDetails>
        </Accordion>
    );
};

const Sidebar = ({ loading, showList, setShowList, getListContent, lists }) => {
    const [activeCategory, setActiveCategory] = useState(null);

    const handleCategoryClick = (category) => {
        setActiveCategory(activeCategory === category ? null : category);
    };
    const handleList = (category) => {
        setShowList({ type: category, status: !showList.status })
    };
    useEffect(() => {
        showList?.type !== '' && showList?.status && getListContent()
    }, [showList?.type, showList?.status])
    return (
        <div className="sidebar">
            <Accordion expanded={activeCategory === 'Films'} onChange={() => handleCategoryClick('Films')} style={{ backgroundColor: 'unset' }} onClick={() => handleList('films')}>
                <AccordionSummary style={{ display: 'flex', backgroundColor: activeCategory === 'Films' ? '#CB1A80' : '', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FolderIcon style={{ color: 'white' }} />
                        <Typography style={{ color: 'white' }}>Films</Typography>
                    </div>
                    <div>
                        {activeCategory === 'Films' ? <ExpandLessIcon style={{ color: 'white' }} /> : <ArrowForwardIosIcon style={{ color: 'white' }} />}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {loading?.fetchList ? (
                        <Typography>Loading...</Typography>
                    ) : (
                        <div>
                            {lists.map((movie) => (
                                <MovieAccordion key={movie.title} movie={movie?.title} />
                            ))}
                        </div>

                    )}
                </AccordionDetails>
            </Accordion>

            <Accordion expanded={activeCategory === 'People'} onChange={() => handleCategoryClick('People')} style={{ backgroundColor: 'unset' }} onClick={() => handleList('people')}>
                <AccordionSummary style={{ display: 'flex', backgroundColor: activeCategory === 'People' ? '#CB1A80' : '', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FolderIcon style={{ color: 'white' }} />
                        <Typography style={{ color: 'white' }}>People</Typography>
                    </div>
                    <div>
                        {activeCategory === 'People' ? <ExpandLessIcon style={{ color: 'white' }} /> : <ArrowForwardIosIcon style={{ color: 'white' }} />}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {loading?.fetchList ? (
                        <Typography>Loading...</Typography>
                    ) : (
                        <div>
                            {lists.map((movie) => (
                                <MovieAccordion key={movie.title} movie={movie?.name} />
                            ))}
                        </div>

                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={activeCategory === 'Planets'} onChange={() => handleCategoryClick('Planets')} style={{ backgroundColor: 'unset' }} onClick={() => handleList('planets')}>
                <AccordionSummary style={{ display: 'flex', backgroundColor: activeCategory === 'Planets' ? '#CB1A80' : '', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FolderIcon style={{ color: 'white' }} />
                        <Typography style={{ color: 'white' }}>Planets</Typography>
                    </div>
                    <div>
                        {activeCategory === 'Planets' ? <ExpandLessIcon style={{ color: 'white' }} /> : <ArrowForwardIosIcon style={{ color: 'white' }} />}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {loading?.fetchList ? (
                        <Typography>Loading...</Typography>
                    ) : (
                        <div>
                            {lists.map((movie) => (
                                <MovieAccordion key={movie.title} movie={movie?.name} />
                            ))}
                        </div>

                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={activeCategory === 'Starships'} onChange={() => handleCategoryClick('Starships')} style={{ backgroundColor: 'unset' }} onClick={() => handleList('starships')}>
                <AccordionSummary style={{ display: 'flex', backgroundColor: activeCategory === 'Starships' ? '#CB1A80' : '', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FolderIcon style={{ color: 'white' }} />
                        <Typography style={{ color: 'white' }}>Starships</Typography>
                    </div>
                    <div>
                        {activeCategory === 'Starships' ? <ExpandLessIcon style={{ color: 'white' }} /> : <ArrowForwardIosIcon style={{ color: 'white' }} />}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {loading?.fetchList ? (
                        <Typography>Loading...</Typography>
                    ) : (
                        <div>
                            {lists.map((movie) => (
                                <MovieAccordion key={movie.title} movie={movie?.name} />
                            ))}
                        </div>

                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={activeCategory === 'Species'} onChange={() => handleCategoryClick('Species')} style={{ backgroundColor: 'unset' }} onClick={() => handleList('species')}>
                <AccordionSummary style={{ display: 'flex', backgroundColor: activeCategory === 'Species' ? '#CB1A80' : '', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FolderIcon style={{ color: 'white' }} />
                        <Typography style={{ color: 'white' }}>Species</Typography>
                    </div>
                    <div>
                        {activeCategory === 'Species' ? <ExpandLessIcon style={{ color: 'white' }} /> : <ArrowForwardIosIcon style={{ color: 'white' }} />}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {loading?.fetchList ? (
                        <Typography>Loading...</Typography>
                    ) : (
                        <div>
                            {lists.map((movie) => (
                                <MovieAccordion key={movie.title} movie={movie?.name} />
                            ))}
                        </div>

                    )}
                </AccordionDetails>
            </Accordion>
            <Accordion expanded={activeCategory === 'Vehicles'} onChange={() => handleCategoryClick('Vehicles')} style={{ backgroundColor: 'unset' }} onClick={() => handleList('vehicles')}>
                <AccordionSummary style={{ display: 'flex', backgroundColor: activeCategory === 'Vehicles' ? '#CB1A80' : '', justifyContent: 'space-around' }}>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <FolderIcon style={{ color: 'white' }} />
                        <Typography style={{ color: 'white' }}>Vehicles</Typography>
                    </div>
                    <div>
                        {activeCategory === 'Vehicles' ? <ExpandLessIcon style={{ color: 'white' }} /> : <ArrowForwardIosIcon style={{ color: 'white' }} />}
                    </div>
                </AccordionSummary>
                <AccordionDetails>
                    {loading?.fetchList ? (
                        <Typography>Loading...</Typography>
                    ) : (
                        <div>
                            {lists.map((movie) => (
                                <MovieAccordion key={movie.title} movie={movie?.name} />
                            ))}
                        </div>

                    )}
                </AccordionDetails>
            </Accordion>


        </div>
    );

}
export default Sidebar;