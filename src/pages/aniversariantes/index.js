import React from "react";
import Header from "../../components/header";
import Aniversario from "../../components/aniversario";

export default function Aniversariantes(){
    return(
        <div>
        <Header />
            <main>       
                <section className="centro">
                  <Aniversario />
                 </section>
            </main>
    </div>

    )
}