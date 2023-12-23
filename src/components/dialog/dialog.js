import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import axios from "axios";

export default function FormDialog(props) {

  const [editvalues, setEditvalues] = useState ({
    id: props.id,
    nome: props.nome,
    telefone: props.telefone ,
    compra: props.compra,
    
  });

  const handleEditCliente = () =>{
    axios.put("http://192.168.1.10:3001/editar",{
      id: editvalues.id,
      nome: editvalues.nome,
      telefone: editvalues.telefone ,
      compra: editvalues.compra
    }).then((response)=>{
      alert("Cliente editado com sucesso!!!!")
      console.log(response)
    });
    handleClose ();
    window.location.reload();
  };

  const handleDeleteCliente = () =>{
    axios.delete(`http://192.168.1.10:3001/delete/${editvalues.id}`).then((response)=>{
      alert("Cliente excluido com sucesso!!!!")
      console.log(response)
    });
    handleClose ();
    window.location.reload();
  };

  const handleEnvioMensagem = () =>{
    let saud = "Olá";
    let msg = "chegou novidades em,";
    let msg1 = "na casa dos tecidos venha conferir!!!!" 
    let url = `https://web.whatsapp.com/send?phone=${editvalues.telefone}&text=${saud} ${editvalues.nome} ${msg} (Digite o produto que o seu cliente comprou), ${msg1} `
    window.open(url)
    handleClose ();
  };
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
          <Button onClick={handleEnvioMensagem}>Enviar</Button>
        </DialogActions>
      </Dialog>
    
  );
}
