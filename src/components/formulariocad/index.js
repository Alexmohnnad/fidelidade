import React, {useState,}from "react";
import './style.css'
import { Link } from "react-router-dom";
import axios from "axios";


export default function Formulario() {
  const [values, setValues]  = useState();
console.log(values);
  const handleChangeValues = value => {
    setValues((prevValue) => ({
      ...prevValue,
    [value.target.name]: value.target.value,
    }));
 
  };
  const handleClickButton = () =>{
    if(!values.nome){
      return alert("Digite o nome")
    }else if(!values.telefone){
      return alert("Digite numero de telefone")
    }else if(!values.datanascimento){
      return alert("Digite data de nascimento")
    }else if(!values.compra){
      return alert("Digite compra realizada pelo cliente")
    }else{
      axios.post("http://localhost:3001/cadastro",{
        nome: values.nome,
        cpf: values.cpf,
        telefone: values.telefone,
        datanascimento: values.datanascimento,
        compra: values.compra,
      }).then((response)=>{
        alert("Cliente cadastrado com sucesso!!!!")
        /*console.log(response)*/
      });

  }};
    return (  
    <form className=".box-formulario">   
      <div className="formulario">
            <hr /> 
                <input 
                className="nome"
                name="nome" 
                type="text"
                placeholder="Insira o nome do seu cliente" 
                onChange={handleChangeValues}
              
                />                                
                <input 
                className="dividido"
                name="cpf" 
                type="number"
                placeholder="CPF"
                onChange={handleChangeValues}
                />              
                <input
                 className="dividido"
                 name="telefone"
                 type="number"
                 maxLength={11}
                 placeholder="Telefone"
                 onChange={handleChangeValues}
                 />              
                <input 
                className="dividido"
                name="datanascimento"
                type="datatime"
                maxLength={5}
                placeholder="Data de nascimento"
                onChange={handleChangeValues}
                />
                <input 
                className="nome"
                name="compra" 
                type="text"
                minLength={1}
                maxLength={200}
                placeholder="Tipo de produto que seu cliente comprou"
                onChange={handleChangeValues}
                />  
                    <Link className="btn-voltar"to='/'>Voltar</Link>
               {/* <button className="btn-voltar" onClick={handleClickVoltar} >Voltar</button> */}
                <button className="btn-gravar" onClick={() => handleClickButton ()} >Salvar</button>  
            <hr />   
      </div>
    </form> 
    );
  }
