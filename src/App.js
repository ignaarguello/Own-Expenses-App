import './App.css';
import TituloExpenses from './components/TituloExpenses/TituloExpenses';
import GridMenuHome from './components/GridMenuHome/GridMenuHome';
import Counter from './components/Counter/Counter';
import MenuFooter from './components/MenuFooter/MenuFooter';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    let movimientos_storage = localStorage.getItem('movimientos')
    let dinero_total_storage = localStorage.getItem('dinero_total')
    if (movimientos_storage && dinero_total_storage) {
      console.log('Todo en orden!')
    }
    else {
      localStorage.setItem('movimientos', JSON.stringify([]))
      localStorage.setItem('dinero_total', JSON.stringify([]))
    }
  }, [])

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
