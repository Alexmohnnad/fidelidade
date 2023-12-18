import React from "react";
import { Link } from "react-router-dom";


export default function Aniversario() {
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
      if(Form > 0){
        <h1>tem algo no banco</h1>
      }else{
        <h1> sem consulta no banco</h1>
      }
    }
  
    return (
        
    <div className=".box-formulario ">   
      <form className="formulario" method="post" onSubmit={handleGravar}>
            <hr /> 
                <label >
                <input className="nome"name="datanascimento" type="text"
                                placeholder="Consulta dia e mes 01/01" />                                
                </label>     
            <hr />
            <div className="btndiv">
                <Link className="btn-voltar"to='/'>Voltar</Link>            
                <button className="btn-gravar"type="submit">OK</button>
            </div>    
      </form>
    </div> 
    );
  }
  