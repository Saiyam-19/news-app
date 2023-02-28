import {  Routes, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './app/store';
import NewsList from './features/NewsList';
import FavoritesList from './features/FavoritesList';
import Filters from './features/Filters';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <ul>
          <li>
            <Link to="/">News</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>
      <Routes>   
        <Route path="/" element={<NewsList/>}/>
        <Route path="/favorites" element={<FavoritesList/>} />
        <Route path="/:category" element={<><Filters/><NewsList/></>}/>
      </Routes>
    </div>
  );
}

export default App;
