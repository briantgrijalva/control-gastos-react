import React from 'react';
import Gasto from './Gasto';
import PropTypes from 'prop-types'
import Ingreso from './Ingreso';

 const Listado = ({gastos, ingresos}) => ( 
     <div className="gastos-realizados">
         <h2>Listado</h2>
         {gastos.map(gasto => (
             <Gasto 
                key={gasto.id}
                gasto={gasto}
             />
         ))}

        {ingresos.map(ingreso => (
             <Ingreso 
                key={ingreso.id}
                ingreso={ingreso}
             />
         ))}
     </div>
     
  );
 
  Listado.propTypes = {
      gastos: PropTypes.array.isRequired
  }

 export default Listado;