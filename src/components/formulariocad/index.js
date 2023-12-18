import React from "react";
import './style.css'
import { Link } from "react-router-dom";


export default function Formulario() {
    function handleGravar(e) {
      // impede que o navegador recarregue a pagina
     e.preventDefault();
  
      // Inicia o formulario
      const form = e.target;
      const formData = new FormData(form);
  
      // Você pode passar formData como um corpo de busca diretamente:
      fetch('/cadcliente', { method: form.method, body: formData });
  
      // Ou você pode trabalhar com ele como um objeto simples:
      const Form = Object.fromEntries(formData.entries());
      console.log(Form);
    }
  
    return (
        
    <div className=".box-formulario ">   
      <form className="formulario" method="post" onSubmit={handleGravar}>
            <hr /> 
                <label >
                <input className="nome"name="nome" type="text"
                                placeholder="Insira o nome do seu cliente" />                                
                <input className="dividido"name="CPF" type="text"
                                placeholder="CPF" />              
                <input className="dividido"name="Telefone" type="text"
                                placeholder="Telefone" />              
                <input className="dividido"name="Datanascimento" type="text"
                                placeholder="Data de nascimento" />
                <input className="nome"name="Compra" type="text"
                                placeholder="Tipo de produto que seu cliente comprou" />  
                </label>     
            <hr />
            <div className="btndiv">
                <Link className="btn-voltar"to='/'>Voltar</Link>
            
                <button className="btn-gravar"type="submit">Salvar</button>
            </div>    
      </form>
    </div> 
    );
  }
  