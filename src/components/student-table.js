import React from 'react';
import {useState} from "react";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './Title';
import Paper from '@mui/material/Paper';
import TableContainer from '@mui/material/TableContainer';
// import BasicModal from './modal'
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';


// Generate Order Data

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Students() {
    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [open, setOpen] = useState(false);
    const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
    const [idEdit, setIdEdit] = useState(0);
    const [indexDelete, setIndexDelete] = useState(0);
    const handleOpen = () => {
        setOpen(true)
        setName('')
        setAge('')
    }
    const handleClose = () => {
        setOpen(false);
        setOpenConfirmDelete(false);
        setIdEdit(0);
        setIndexDelete(0)
    }
    const handleClickOpenConfirm = (index) => {
        setOpenConfirmDelete(true);
        setIndexDelete(index);
    };
    const handleConfirmDelete = () => {
        setOpenConfirmDelete(false);
        doDelete(indexDelete)
    };
    const [rows] = useState([
        {id: 1, name: 'Elvis Presley', age: 18},
        {id: 2, name: 'Paul McCartney', age: 18},
        {id: 3, name: 'Tom Scholz', age: 18},
        {id: 4, name: 'Michael Jackson', age: 18},
        {id: 5, name: 'Bruce Springsteen', age: 18},
    ])
    const getItem = localStorage.getItem('students')
    const [students, setStudents] = useState(getItem ? JSON.parse(getItem) : null || rows)

    const finishSubmit = (name, age) => {
        const maxId = getMaxId()
        const id = maxId + 1
        let tmp = [...students, {id, name, age}]
        if (idEdit) {
            const filtered = students.filter((v, i) => v.id !== idEdit)
            tmp = [...filtered, {id: idEdit, name, age}]
            setIdEdit(0)
        }
        console.log('tmp', tmp)
        localStorage.setItem('students', JSON.stringify(tmp))
        setStudents(tmp)
    }
    const getMaxId = () => {
        return students.reduce(function (p, v) {
            return (p.id > v.id ? p.id : v.id);
        });
    }

    const handleChangeName = (event) => {
        setName(event.target.value)
    }
    const handleChangeAge = (event) => {
        setAge(event.target.value)
    }

    const handleSubmit = (event) => {
        finishSubmit(name, age)
        handleClose()
        event.preventDefault()
    }
    const doDelete = (index) => {
        const filtered = students.filter((v, i) => i !== index)
        setStudents(filtered)
        localStorage.setItem('students', JSON.stringify(filtered))

    }
    const editItem = (data) => {
        setIdEdit(data.id)
        setName(data.name)
        setAge(data.age)
    }
    return (
        <React.Fragment>
            <TableContainer component={Paper}>
                <Title>Students</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>ID</TableCell>
                            <TableCell>Name</TableCell>
                            <TableCell>Age</TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {students.map((row, index) => (
                            <TableRow key={row.id}>
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.name}</TableCell>
                                <TableCell>{row.age}</TableCell>
                                <TableCell><EditIcon onClick={() => {
                                    handleOpen();
                                    editItem(row)
                                }}></EditIcon></TableCell>
                                <TableCell><DeleteForeverIcon onClick={e => handleClickOpenConfirm(index)}></DeleteForeverIcon></TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Dialog
                    open={openConfirmDelete}
                    onClose={handleClose}
                    aria-labelledby="draggable-dialog-title"
                >
                    <DialogTitle style={{ cursor: 'move' }} id="draggable-dialog-title">
                        Confirm delete record
                    </DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Are you sure?
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus onClick={handleClose}>
                            Cancel
                        </Button>
                        <Button onClick={handleConfirmDelete}>Delete</Button>
                    </DialogActions>
                </Dialog>


                <Button onClick={handleOpen}>Create record</Button>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <Box sx={style} component="form"
                         noValidate
                         autoComplete="off">
                        <form>
                            <TextField
                                fullWidth
                                label="Name"
                                defaultValue={name}
                                variant="standard"
                                rows={12}
                                onChange={handleChangeName}
                            />
                            {idEdit !== 0 ? (
                                <TextField
                                    fullWidth
                                    disabled
                                    label="Age"
                                    defaultValue={age}
                                    rows={12}
                                    variant="standard"
                                />
                            ) : (
                                <TextField
                                    fullWidth
                                    label="Age"
                                    defaultValue={age}
                                    variant="standard"
                                    type="number"
                                    rows={12}
                                    onChange={handleChangeAge}
                                />
                            )}
                            <Button fullWidth variant="contained" onClick={handleSubmit}>Submit</Button>
                        </form>
                    </Box>
                </Modal>
            </TableContainer>

        </React.Fragment>
    );
}