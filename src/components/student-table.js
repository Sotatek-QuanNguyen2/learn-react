import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import BasicModal from './modal'

// Generate Order Data
function createData(id, birthday, name, age) {
    return { id, birthday, name, age };
}

const rows = [
    createData(1, '11 Mar, 2003', 'Elvis Presley', 18),
    createData(2, '12 Mar, 2003', 'Paul McCartney', 18),
    createData(3, '13 Mar, 2003', 'Tom Scholz', 18),
    createData(4, '14 Mar, 2003', 'Michael Jackson', 18),
    createData(5, '15 Mar, 2003', 'Bruce Springsteen', 18),
];


const useStyles = makeStyles((theme) => ({
    seeMore: {
        marginTop: theme.spacing(3),
    },
}));

export default function Students() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <Title>Students</Title>
            <Table size="small">
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Birth Day</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell>{row.id}</TableCell>
                            <TableCell>{row.birthday}</TableCell>
                            <TableCell>{row.name}</TableCell>
                            <TableCell>{row.age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <BasicModal></BasicModal>
        </React.Fragment>
    );
}