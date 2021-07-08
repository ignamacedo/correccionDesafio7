import './App.css';
import NavBar from './components/NavBar.js';
import ItemListConrtainer from './components/ItemListContainer.js';

function App() {
  return (
    <div className="conteiner">
      <header>
        <NavBar/>
        <ItemListConrtainer/>
      </header>
        
    </div>
  );
}

export default App;
