import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import Pregunta from './components/Pregunta';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';
import FormularioIngresos from './components/FormlularioIngresos';


function App() {

  // definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarpregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  const [ingresos, guardarIngresos] = useState([]);
  const [ingreso, guardarIngreso] = useState({});
  const [crearingreso, guardarCrearIngreso] = useState(false);

  // UseEffect que actualiza el restante
useEffect(() => {
  if(crearingreso) {

    // agrega el nuevo presupuesto
    guardarIngresos([
      ...ingresos,
      ingreso
    ]);

    // suma al presupuesto actual
    const presupuestoRestante = restante + ingreso.cantidad;

    guardarRestante(presupuestoRestante);

    // Resetear a false
    guardarCrearIngreso(false);

  }

  if(creargasto) {

    // agrega el nuevo presupuesto
    guardarGastos([
      ...gastos,
      gasto
    ]);

    // resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;

    // suma del al presupuesto actual
    // const presupuestoRestante = restante + ingreso.cantidad;

    guardarRestante(presupuestoRestante);

    // Resetear a false
    guardarCrearGasto(false);
  }
}, [ingreso, crearingreso, ingresos, restante, gasto, creargasto, gastos])

  return (
    <div className="container">
      <header>
        <h1>Control de Gastos e Ingresos</h1>
        <div className="contenido-principal contenido">
          {mostrarpregunta ? 
          (
            <Pregunta
            guardarPresupuesto={guardarPresupuesto}
            guardarRestante={guardarRestante}
            actualizarPregunta={actualizarPregunta}
          />
          ) : (
            <>
            <div className="row">
              <div className="one-half column">
                <FormularioIngresos 
                  guardarGasto={guardarIngreso}
                  guardarCrearGasto={guardarCrearIngreso}
                />
              </div>

              <div className="one-half column">
                <Formulario 
                  guardarGasto={guardarGasto}
                  guardarCrearGasto={guardarCrearGasto}
                />
              </div>
                
            </div>

            <div className="row">
              <div className="two-half column">
                <Listado
                  gastos={gastos}
                  ingresos={ingresos}
                />
                <ControlPresupuesto
                  presupuesto={presupuesto}
                  restante={restante}
                />
            </div>
          </div>
          </>
            ) 
          }             
        </div>
      </header>
    </div>
  );
}

export default App;
