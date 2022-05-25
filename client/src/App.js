import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import AddItem from './views/AddItem';
import Home from './views/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<AddItem/>} path="/add" default/>
          <Route element={<Home/>} path="/home"/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
