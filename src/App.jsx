import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/Text/ItemListContainer';
import Cont from './components/ItemCount';

function App() {


  return (
    <div className="App">

      <NavBar />
      <ItemListContainer msj="COMPRE Y VENDA CON CONFIANZA"/>

      <header className="App-header">
        <Cont />
      </header>
    </div>
  );
}

export default App;
