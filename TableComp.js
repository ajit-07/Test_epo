import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { styled } from '@mui/system';
import GroupWorkIcon from '@mui/icons-material/GroupWork';


// Define custom styles
const StyledTableCell = styled(TableCell)({
    margin: '50px', // Adjust the value as needed
    color: 'unset'
});
const StyledTableCell1 = styled(TableCell)({
    margin: '50px', // Adjust the value as needed
    color: 'unset',
    borderBottom: 'unset'
});

const CustomTable = ({ columns = [], rowData = [], lists }) => {
    columns = ['Name', 'Director', 'Release Date']
    const extractProperties = (films, properties) =>
        films.map((film) =>
            properties.reduce((obj, prop) => {
                obj[prop] = film[prop];
                return obj;
            }, {})
        );
    const extractedData = extractProperties(lists, ["title", "release_date", "director"]);


    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead style={{ backgroundColor: '#4D5875', color: 'white', borderBottom: 'unset' }}>
                    <TableRow>
                        {columns?.map((column) => (
                            <StyledTableCell1>
                                {column}
                            </StyledTableCell1>
                        ))}
                        <StyledTableCell1></StyledTableCell1>
                    </TableRow>
                </TableHead>
                <TableBody style={{ backgroundColor: '#03123D' }}>
                    {extractedData?.map((row, index) => (
                        <TableRow key={index} style={{ color: 'white' }}>
                            {Object.keys(row)?.map((key) => (
                                <StyledTableCell key={key}>
                                    {/* Render MUI icon only for the 'Name' column */}
                                    {key === 'title' && (
                                        <IconButton color="primary">
                                            <GroupWorkIcon style={{ color: 'white' }} />
                                        </IconButton>
                                    )}
                                    {row[key]}
                                </StyledTableCell>
                            ))}
                            <StyledTableCell>
                                <IconButton color="primary">
                                    <MoreVertIcon />
                                </IconButton>
                            </StyledTableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default CustomTable;
