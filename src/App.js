import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './pages/Footer/Footer';
import BuyNow from './pages/Home/BuyNow';
import Home from './pages/Home/Home';
import Login from './pages/LoginPage/Login';
import Register from './pages/LoginPage/Register';
import Navbar from './pages/Navbar/Navbar';
import NotFound from './pages/NotFound/NotFound';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/buynow' element={<PrivateRoute><BuyNow></BuyNow></PrivateRoute>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
