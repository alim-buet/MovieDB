
import "./css/App.css";
import MovieCard from './components/movieCard'
import Favorites from './pages/Favorites';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
function App() {
  const movieNumber = 2;

  return (

    <div>
      <NavBar />

      <main className="main-content">
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/favorites' element={<Favorites />}></Route>

        </Routes>

      </main>
    </div>




  )
}


export default App
