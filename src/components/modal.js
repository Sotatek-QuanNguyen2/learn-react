import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

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

export default function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [id, setId] = React.useState("")
  const [name, setName] = React.useState("")
  const [age, setAge] = React.useState("")


  const handleChangeID = (event) => {
    setId(event.target.value)
  }
  const handleChangeName = (event) => {
    setName(event.target.value)
  }
  const handleChangeAge = (event) => {
    setAge(event.target.value)
  }

  const handleSubmit = (event) => {
    handleClose()
    event.preventDefault()
  }

  return (
    <div>
      <Button onClick={handleOpen}>Create record</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form >
            <label>ID
              <input placeholder='ID' value={id} onChange={handleChangeID} />
            </label>
            <br></br>
            <label>Name
              <input type="text" value={name} onChange={handleChangeName} />
            </label>
            <br></br>
            <label>Age
              <input placeholder='Age' value={age} onChange={handleChangeAge} />
            </label>
            <br />
            <Button variant="contained" onClick={handleSubmit} >Submit</Button>
          </form>
        </Box>

      </Modal>
    </div>
  );
}
