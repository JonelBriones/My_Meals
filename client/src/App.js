import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddMeal from './views/AddMeal';
import Home from './views/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AddMeal/>} path="/add" default/>
          <Route element={<Home/>} path="/home"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
