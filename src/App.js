import logo from './logo.svg';
import './App.css';
import UserComponent from './components/usercomponent';

function App() {
  const contactoPrueba = {
    nombre: 'Aaron',
    apellido: 'Martínez',
    email: 'info@correo.es',
    conectado: false,
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <UserComponent contacto={contactoPrueba} />
      </header>
    </div>
  );
}

export default App;