import './App.css';
import './bootstrap.min.css'
import AppBar from './components/appbar/AppBar';
import Header from './components/header/Header';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Header />

      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
