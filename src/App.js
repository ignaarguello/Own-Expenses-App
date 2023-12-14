import './App.css';
import BackgroundsHome from './components/BackgroundsHome/BackgroundsHome';
import TituloExpenses from './components/TituloExpenses/TituloExpenses';
import GridMenuHome from './components/GridMenuHome/GridMenuHome';


function App() {
  return (
    <div className="App">
      <TituloExpenses />
      <GridMenuHome />
      <BackgroundsHome />
    </div>
  );
}

export default App;
