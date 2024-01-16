import './App.css';
import TituloExpenses from './components/TituloExpenses/TituloExpenses';
import GridMenuHome from './components/GridMenuHome/GridMenuHome';
import Counter from './components/Counter/Counter';
import MenuFooter from './components/MenuFooter/MenuFooter';
import { useEffect, useState } from 'react';
import { images_array } from './data/images_background_data';


function App() {

  /* Hook encargado de crear las propiedades en LS en caso de no existir */
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

  /* Hook encargado del cambio del background */
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setContador((prevContador) => (prevContador + 1) % (images_array.length - 1 + 1));
    }, 9000);
    return () => clearInterval(intervalId);
  }, [contador, images_array]);


  /* JSX del componente */
  return (
    <div className="App" style={
      {
        backgroundImage: `url(${images_array[contador]})`,
        backgroundSize: "cover",
      }}>
      <TituloExpenses />
      <GridMenuHome />
      <Counter />
      <MenuFooter />
    </div>
  );
}

export default App;
