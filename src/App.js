import './App.css';
import './bootstrap.min.css'
import AppBar from './components/appbar/AppBar';
import Header from './components/header/Header';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Underfined from './pages/underfined/Underfined';
import History from './pages/history/History';
import Missiya from './components/missiya/Missiya';
import {MISSION_ROUTE, NOT_FOUND, HISTORY_ROUTE, STRUCTURE_ROUTE } from "./utils/Consts";
import Detailed from './pages/detailed/Detailed';
import BlogDetailed from './pages/blogDetailed/BlogDetailed';
import NewsDetailed from './pages/blogDetailed/NewsDetailed';
import LatestNewsDetailed from './pages/blogDetailed/LatestNewsDetailed';
import Structure from './pages/structure/Structure';

function App() {
  return (
    <div className="App">
      <AppBar />
      <Header />
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path={NOT_FOUND} element={<Underfined/>}/>
        <Route path={MISSION_ROUTE} element={<Missiya/>}/>
        <Route path={HISTORY_ROUTE} element={<History/>}/>
        <Route path={STRUCTURE_ROUTE} element={<Structure/>} />
        <Route path={"/students/:id"} element={<Detailed/>} />
        <Route path={"/teacher/:id"} element={<Detailed/>} />
        <Route path={"/blog_detailed/:id"} element={<BlogDetailed/>} />
        <Route path={"/news_detailed/:id"} element={<NewsDetailed/>} />
        <Route path={"/latest_news_detailed/:id"} element={<LatestNewsDetailed/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
