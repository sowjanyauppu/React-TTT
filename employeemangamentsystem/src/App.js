import './App.css';
import Create from './components/Create';
import Home from './components/Home';
import Read from './components/Read';
import Update from './components/Update';
import { BrowserRouter, Routes, Route } from 'react-router-dom'


function App() {
  
  return (
    <BrowserRouter>
    <Routes>
          <Route exact path='/home' element={<Home />} />
          <Route exact path='/create' element={<Create/>} />
          <Route exact path='/read' element={<Read/>} />
          <Route path='/update' element={<Update/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
