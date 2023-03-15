import './App.css';
import './bootstrap.min.css'
import AppBar from './components/appbar/AppBar';
import Header from './components/header/Header';
import { Routes, Route} from 'react-router-dom'
import Home from './pages/home/Home';
import Footer from './components/footer/Footer';
import Underfined from './pages/underfined/Underfined';
import History from './pages/UNIVERSITY/history/History';
import Missiya from './components/missiya/Missiya';
import {MISSION_ROUTE, NOT_FOUND, HISTORY_ROUTE, STRUCTURE_ROUTE, FOUNDERS_ROUTE, DEVELOPMENT_ROUTE, PRESIDENT_ROUTE, TEST_ROUTE } from "./utils/Consts";
import Detailed from './pages/detailed/Detailed';
import BlogDetailed from './pages/blogDetailed/BlogDetailed';
import NewsDetailed from './pages/blogDetailed/NewsDetailed';
import LatestNewsDetailed from './pages/blogDetailed/LatestNewsDetailed';
import Structure from './pages/UNIVERSITY/structure/Structure';
import Founders from './pages/UNIVERSITY/Founders/founders';
import Development from './pages/UNIVERSITY/Development/Development';
import President from './pages/UNIVERSITY/President/President';
import Testnews from './pages/UNIVERSITY/Testnews/Testnews';

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
        <Route path={FOUNDERS_ROUTE} element={<Founders/>}/>
        <Route path={STRUCTURE_ROUTE} element={<Structure/>} />
        <Route path={DEVELOPMENT_ROUTE} element={<Development/>} />
        <Route path={TEST_ROUTE} element={<Testnews/>} />
        <Route path={PRESIDENT_ROUTE} element={<President/>} />
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
