import './App.css';
import './bootstrap.min.css'
import AppBar from './components/appbar/AppBar';
import Header from './components/header/Header';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Underfined from './pages/underfined/Underfined';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Header />

      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={"*"} element={<Underfined/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
