import React from 'react'           //rafce //Archivo es nombre de componente

const C01componente = () => {
    return (
        <div>
            Componente 1. definida como funcion flecha (rafce)
        </div>
    )
}

export default C01componente

/*
import React from 'react';          //imr   //Asigna sólo el import

const OtroNombre = () => {      //sfc   //Escribir nombre de componente
    return ( <h3>Componente definida como fn flecha (imr, sfc)</h3> );
}
 
export default OtroNombre;
*/

/*
import React from 'react'           //rfce   //Archivo es nombre de componente

function C01componente() {          //Tipo función
    return (
        <div>
            <h3>Componente normal (rfce)</h3>
        </div>
    )
}

export default C01componente
*/

/*
import React from 'react'           //rfc   //Abr. y archivo nombre de componente

export default function C01componente() {   //Tipo función con export
    return (
        <div>
            <h3>Componente como fn normal con export (rfc)</h3>
        </div>
    )
}
*/
/*
import React, { Component } from 'react';   //rcc   //Tipo clase

class C01componente extends Component {
    render() {
        return (
            <div>
                <h3>Componente como clase (rcc)</h3>
            </div>
        );
    }
}

export default C01componente;
*/

/*
import React from 'react'           //rafc  //Abr. fn flecha con export

export const C01componente = () => {
    return (
        <div>
            <h3>Componente como fn flecha abreviada y con export</h3>
        </div>
    )
}
*/