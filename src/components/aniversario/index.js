import React, {useState, useEffect}  from "react";
import { Link } from "react-router-dom";
import  Axios  from "axios";
import Card from "../card/cardniver";
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
          cliente.datanascimento.toLowerCase().includes(textoDigitado.toLowerCase())
          
      );
    };
    const [textoBusca, setTextoBusca] = useState("");
    const handleBuscarCliente = (textoDigitado) => {
      setTextoBusca(textoDigitado);
      setTextoBusca(buscarCliente(textoDigitado));
     // console.log(textoBusca)  
    };

    return (     
    <div className=".box-formulario ">   
      <div className="formulario">
            <hr /> 
                <input 
                className="nome"
                type="text"
                onChange={(event) => handleBuscarCliente(event.target.value)}
                placeholder="Consulta data de aniversario ex: 01/01"
                />   
                
                < Link className="btn-voltar"to='/'>Voltar</Link>  
                <button className="btn-gravar" onClick={() => window.location.reload()} >Limpar</button >
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
                          listcard={textoBusca.ListCard}
                          setListcard={textoBusca.setListcard}
                          />
                        )))
                    : ( <p className="texto">Não há nenhum cliente na lista.</p>)
                    }
                </div>
      </div>
 </div> 
    );
  }