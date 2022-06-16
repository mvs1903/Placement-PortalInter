import './App.css';
import Navbar from './components/navbar';
import { Route,Routes ,Router } from 'react-router-dom';
import SecondPage from './components/secondPage';
import PhoneSignUp from './components/PhoneSignUp';
import Admin from './components/admin';
import 'bootstrap/dist/css/bootstrap.min.css'
import AdminLogin from './components/AdminLogin';
import Otp from './components/Otp';
import SapLogin from './components/SapLogin';
import PopUp from './components/PopUp';


function App() {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route
        to="/PopUp"
        element={<PopUp/>}/>
        <Route
        path="/"
        element={<SapLogin/>}/>
        <Route
        path="/PhoneSignUp"
        element={<PhoneSignUp/>}/>
        {/* <Route
        path="/otp"
        element={<Otp/>}/> */}
        <Route
        path="/secondPage"
        element={<SecondPage/>}/>
        <Route 
        path="/adminLogin"
        element={<AdminLogin/>}/>
        <Route 
        path="/admin"
        element={<Admin/>}/>

      </Routes>
    </> );
}

export default App;
