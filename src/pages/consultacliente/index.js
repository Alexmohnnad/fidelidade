import React from "react";
import Header from "../../components/header";
import Consulta from "../../components/formulariocons";

export default function Consultaclientes(){
    return(
        <div>
        <Header />
            <main>       
                <section className="centro">
                  <Consulta />
                 </section>
            </main>
    </div>

    )
}