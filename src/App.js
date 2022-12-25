// Importing css 
import './App.css';
// Importing components pages and utils
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Notes from './pages/Notes';
import Todolist from './pages/Todolist';
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoutes from './utils/PrivateRoute';



const App = () => {
  return (
    <div className="App-container">
      <Header/>
      <Router>
        <Routes>
          {/* Our Private routes / Protected routes */}
          <Route element={<PrivateRoutes/>}>
            <Route path='/home/todolist' element={<Todolist/>}/>
            <Route path='/home/notes' element={<Notes/>}/>
            <Route path='/' element={<HomePage/>}/>
          </Route>
          {/*  our auth routes */}
          <Route path='/login' element={<Login/>}/>
          <Route path='/register' element={<Register/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
