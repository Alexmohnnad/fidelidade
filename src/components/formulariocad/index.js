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
      return alert("Digite o nome do cliente")  
    }else if(values.nome.length < 3){
      return alert("Digite um nome valido com mais de 3 digitos")
    }else if(!values.telefone || values.telefone.length < 11){
      return alert("Digite numero de telefone válido")
    }else if(!values.datanascimento){
      return alert("Digite data de nascimento")
    }else if(!values.compra){
      return alert("Digite compra realizada pelo cliente")
    }else{
      axios.post("http://localhost:3001/cadastro",{
        nome: values.nome,
        data: values.data,
        telefone: values.telefone,
        datanascimento: values.datanascimento,
        compra: values.compra,
      }).then(()=>{
        return alert("Cliente cadastrado com sucesso!!!!")
        /*console.log(response)*/
      });
      window.location.reload();
  }};

    return (  
    <div className=".box-formulario">   
      <div className="formulario">
            <hr /> 
                <input 
                className="nome"
                name="nome" 
                type="text"
                required="insira um nome valido com pelo menos 3"
                placeholder="Insira o nome do seu cliente" 
                onChange={handleChangeValues}
                />    

                <input 
                className="dividido"
                name="data" 
                //value = {new Date()}
                type="date"
                placeholder="Data da compra"
                onChange={handleChangeValues}
                />         

                <input
                 className="dividido"
                 name="telefone"
                 type="number"
                 minLength={11}
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
                maxLength={200}
                placeholder="Tipo de produto que seu cliente comprou"
                onChange={handleChangeValues}
                />  

                    <Link className="btn-voltar"to='/'>Voltar</Link>
               {/* <button className="btn-voltar" onClick={handleClickVoltar} >Voltar</button> */}
                <button className="btn-gravar" onClick={() => handleClickButton ()} >Salvar</button>  
            <hr />   
      </div>
    </div> 
    );
  }
