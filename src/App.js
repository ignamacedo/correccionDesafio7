import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar.js';// importo componente NavBar.ja


//para llamar al componente uso etiqueta dentro de return
function App() {
  return ( //lo que vemos en el navegador es lo que esta adentor del return
    <div className="conteiner">
      <header>
        <NavBar/>
      </header>
        
    </div>
  );
}

export default App;
