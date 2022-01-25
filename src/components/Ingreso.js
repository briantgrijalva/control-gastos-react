import React from 'react';
import PropTypes from 'prop-types'

const Ingreso = ({ingreso}) => ( 
    <li className="gastos">
        <p>
            {ingreso.nombre}

            <span className="ingreso">$ {ingreso.cantidad}</span>
        </p>
    </li>
 );
 
 Ingreso.propTypes = {
    ingreso: PropTypes.object.isRequired
}

export default Ingreso;