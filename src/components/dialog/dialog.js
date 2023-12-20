import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

export default function FormDialog(props) {

  const [editvalues, setEditvalues] = useState ({
    id: props.id,
    nome: props.nome,
    //cpf: props.cpf,
    telefone: props.telefone ,
   // datanascimento: props.datanascimento,
    compra: props.compra,
    
  });

  const handleEditCliente = () =>{
    axios.put("http://localhost:3001/editar",{
      id: editvalues.id,
      nome: editvalues.nome,
      //cpf: editvalues.cpf,
      telefone: editvalues.telefone ,
      //datanascimento: editvalues.datanascimento,
      compra: editvalues.compra
    });
    //console.log(editvalues)
    handleClose ();
  };

  const handleDeleteCliente = () =>{
    axios.delete(`http://localhost:3001/delete/${editvalues.id}`);
    handleClose ();
  };

  // const handleClickOpen = () => {
  //   props.setOpen(true);
  // };

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleChangrValues = (value) => {
    setEditvalues((preValues) => ({
      ...preValues,
      [value.target.id]: value.target.value,
    }));
  };

  return (

      <Dialog open={props.open} onClose={handleClose}>
        <DialogTitle>Editar / enviar</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="nome"
            label="Nome do cliente"
            defaultValue={props.nome}
            onChange={handleChangrValues}
            type="text"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="telefone"
            label="Telefone"
            defaultValue={props.telefone}
            onChange={handleChangrValues}
            type="number"
            fullWidth
            variant="standard"
          />
          <TextField
            autoFocus
            margin="dense"
            id="compra"
            label="Compra"
            defaultValue={props.compra}
            onChange={handleChangrValues}
            type="text"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDeleteCliente}>Excluir</Button>
          <Button onClick={handleClose}>Sair</Button>
          <Button onClick={handleEditCliente}>Salvar</Button>
          <Button onClick={handleClose}>Enviar</Button>
        </DialogActions>
      </Dialog>
    
  );
}
