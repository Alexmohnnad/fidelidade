import React, {useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
//import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function FormDialog(props) {

  const [editvalues, setEditvalues] = useState ({
    id: props.id,
    nome: props.nome,
    //cpf: props.cpf,
    telefone: props.telefone ,
    datanascimento: props.datanascimento,
    compra: props.compra,
    
  });


  const handleEnvioMensagem = () =>{
    let saud = "Olá";
    let msg = "hoje neste dia super especial, a casa dos tecidos vem te desejar um Feliz aniversário, com paz, saúde e alegria em sua vida.";
    let url = `https://web.whatsapp.com/send?phone=${editvalues.telefone}&text=${saud} ${editvalues.nome} ${msg}`
    window.open(url)
    
    handleClose ();
  };//console.log(handleEnvioMensagem)

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
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Sair</Button>
          <Button onClick={handleEnvioMensagem}>Enviar</Button>
        </DialogActions>
      </Dialog>
    
  );
}
