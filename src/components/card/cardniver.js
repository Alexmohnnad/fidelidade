import React from "react";
import './style.css'
import FormDialog from "../dialog/dialogniver";

export default function Card (props){
    const [open, setOpen] = React.useState(false);
    const handleClickCard = () =>{
        setOpen(true);
    };
    return(
        <>
        <FormDialog 
        open={open} 
        setOpen={setOpen}

        id={props.id} 
        nome={props.nome} 
        //cpf={props.cpf}
        telefone={props.telefone} 
        datanascimento={props.datanascimento}
        compra={props.compra}
        
        
        listcard={props.ListCard}
        setListcard={props.setListcard}
        
        />
        <div className="card--container" onClick={() => handleClickCard()}>
            <h1 className="card--title">{props.nome}</h1>
            <h2 className="card--title">{props.telefone}</h2>
            <h2 className="card--title">{props.datanascimento}</h2>
        </div>
        </>
        
    )
}