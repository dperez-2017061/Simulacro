import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Main } from './components/Main/Main';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <BrowserRouter>
    <Main />
    </BrowserRouter>
  );
}

export default App;
