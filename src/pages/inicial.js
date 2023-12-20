import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";
import './style.css'

export default function Inicial(){
    return(
        <div>
            <Header />
                <main>  
                    <div className="centro">                           
                    <nav >                       
                        <Link className="btn"to='/cadcliente'>Cadastrar clientes</Link>
                        <Link className="btn"to='/consultaclientes'>Consultar clientes</Link> 
                    </nav>    
                    <nav>                           
                        
                        <Link className="btn"to='/aniversariantes'>Aniversariantes</Link>
                    </nav>
                    </div>                                    
                </main>
            <Footer />
        </div>
    )
}