import './App.css';
import PrimerComponente from './Components/PrimerComponente';
import Propiedades from './Components/Propiedades';
import Estados from './Components/Estados';
import EstilosTradicionales from './Components/EstilosTradicionales';
import EstilosLinea from './Components/EstilosLinea';
import EstilosEnModulos from './Components/EstilosEnModulos';
import EstilosConSyledComponents from './Components/EstilosConStyledComponents';

function App() {
    const socios = "JPR - MPB - AC";
    return ( 
        <>
            <PrimerComponente />
            <Propiedades name="Juan Pablo"
                lastname="Cesarini"
                los_socios={socios}
            />
            <Estados />
            <EstilosTradicionales />
            <EstilosLinea />
            <EstilosEnModulos />
            <EstilosConSyledComponents/>
            
        </>
    );
}

export default App;