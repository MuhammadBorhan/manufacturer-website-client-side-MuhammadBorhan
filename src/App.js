import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import Login from './pages/LoginPage/Login';
import Register from './pages/LoginPage/Register';
import Navbar from './pages/Navbar/Navbar';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<PrivateRoute><Home></Home></PrivateRoute>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
      </Routes>
    </div>
  );
}

export default App;
