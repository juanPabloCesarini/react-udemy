import './App.css';
import PrimerComponente from './Components/PrimerComponente';
import Propiedades from './Components/Propiedades';
import Estados from './Components/Estados';
import EstilosTradicionales from './Components/EstilosTradicionales';

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
            
        </>
    );
}

export default App;