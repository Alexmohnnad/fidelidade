import React from "react";
import Header from "../../components/header";
import Formulario from "../../components/formulariocad";
import './style.css'

export default function Cadcliente(){
    return(
        <div>
            <Header />
                <main>       
                    <section className="centro">
                        <Formulario />
                     </section>
                </main>
        </div>
    )
}