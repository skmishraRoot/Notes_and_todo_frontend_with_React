// Importing css 
import './App.css';
// Importing components pages and utils
import Header from './components/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import HomePage from './pages/HomePage';
import Notes from './pages/Notes';
import Todolist from './pages/Todolist';
import Note from './components/Note';
import Task from './components/Task'
import Login from './pages/Login';
import Register from './pages/Register';
import PrivateRoutes from './utils/PrivateRoute';
import { AuthProvider } from './context/AuthContext';
import Addnotes from './components/Addnotes';
import Addtask from './components/Addtask';



const App = () => {
  return (
    <div className='container dark'>
      <div className="app">
      <Router>
      <AuthProvider>
      <Header/>
        <Routes> 
          {/* Our Private routes / Protected routes */}
            <Route element={<PrivateRoutes/>}>
              <Route path='/home/todo' element={<Todolist/>}/>
              <Route path='/home/notes' element={<Notes/>}/>
              <Route path='/' element={<HomePage/>}/>
              <Route path='/home/notes/:id' element={<Note/>}/>
              <Route path='/home/todo/:id' element={<Task/>}/>
              <Route path='/home/notes/create' element={<Addnotes/>}/>
              <Route path='/home/todo/create' element={<Addtask/>}/>
              {/*  our auth routes */}
            </Route>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
        </AuthProvider>
      </Router>
    </div>
    </div>
  );
}

export default App;
