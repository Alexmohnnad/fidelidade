import React, {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import  Axios  from "axios";
import Card from "../card/card";
import './style.css'

export default function Consulta() {
  
  const [listcliente, setlistcliente] = useState();
    //console.log(listcliente);
     useEffect(() => {
        Axios.get("http://localhost:3001/consultacliente", {
        }).then((response) => {
            
            setlistcliente (response.data);
        }); 
    }, []);

    const buscarCliente = (textoDigitado) => {
      return listcliente.filter(
        (cliente) =>
          cliente.nome.toLowerCase().includes(textoDigitado.toLowerCase()) ||
          cliente.telefone.toLowerCase().includes(textoDigitado.toLowerCase()) ||
          cliente.compra.toLowerCase().includes(textoDigitado.toLowerCase()) || 
          cliente.data.toLowerCase().includes(textoDigitado.toLowerCase())
      );
    };
    const [textoBusca, setTextoBusca] = useState("");
    const handleBuscarCliente = (textoDigitado) => {
      setTextoBusca(textoDigitado);
      setTextoBusca(buscarCliente(textoDigitado));
     //console.log(textoBusca)  
    };

    return (     
    <div className=".box-formulario ">   
      <div className="formulario">
            <hr /> 
                <label>Consulte por nome, telefone ou tipo de compra:</label> 
                <input   
                className="nome"
                type="text"
                onChange={(event) => handleBuscarCliente(event.target.value)}
                placeholder="Consulta cliente"
                />  
                 <label>Consulte por data da compra:</label>
                 <input 
                className="nome"
                type="date"
                onChange={(event) => handleBuscarCliente(event.target.value)}
               // placeholder="pesquisa por data"
                />  
                <button className="btn-gravar" onClick={() => window.location.reload()} >Limpar</button>
                < Link className="btn-voltar"to='/'>Voltar</Link>  
            <hr />
      </div>
            <div>
             {textoBusca && textoBusca.length > 0 
                ? (textoBusca.map((textoBusca) => (
                    <Card 
                    key={textoBusca.id}
                    id={textoBusca.id}
                    nome={textoBusca.nome}
                    cpf={textoBusca.cpf}
                    telefone={textoBusca.telefone}
                    compra={textoBusca.compra} 
                    data={textoBusca.data}
                    listcard={textoBusca.ListCard}
                    setListcard={textoBusca.setListcard}
                    />
                  )))
               : ( <p className="texto">Não há nenhum cliente na lista.</p>)
              }
           </div>
    </div> 
    );
  }
  