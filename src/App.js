import './App.css';
// Importing components
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importing Pages
import HomePage from './pages/HomePage';
import Notes from './pages/Notes';
import Todolist from './pages/Todolist';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <div className="App">
      <Header/>
      <Router>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/home/todolist' element={<Todolist/>}/>
          <Route path='/home/notes' element={<Notes/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
