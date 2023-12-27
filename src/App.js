import './App.css';
import TituloExpenses from './components/TituloExpenses/TituloExpenses';
import GridMenuHome from './components/GridMenuHome/GridMenuHome';
import Counter from './components/Counter/Counter';
import MenuFooter from './components/MenuFooter/MenuFooter';

function App() {
  return (
    <div className="App">
      <TituloExpenses />
      <GridMenuHome />
      <Counter />
      <MenuFooter />
    </div>
  );
}

export default App;
