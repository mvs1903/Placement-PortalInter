import "./App.css";
import Navbar from "./components/navbar";
import { Route, Routes, Router } from "react-router-dom";
import SecondPage from "./components/Student/secondPage";
import PhoneSignUp from "./components/Student/PhoneSignUp";
import Otp from "./components/Student/Otp";
import Admin from "./components/Admin/admin";
import "bootstrap/dist/css/bootstrap.min.css";
import AdminLogin from "./components/Admin/AdminLogin";
import SapLogin from "./components/Student/SapLogin";
import PopUp from "./components/Student/PopUp";
// import HomePage from './components/HomePage';
import Notification from "./components/Admin/Notification";
import AdminNavTemplate from "./components/Admin/AdminNavTemplate";
import FirstPage from "./components/FirstPage";
import ExcelR from "./components/excelpage";
import PopUpCompany from "./components/Student/PopUpCompany";
import { CompanyState } from "./context/CompanyContext";
import { UserState } from "./context/UserContex";
function App() {
  return (
    <CompanyState>
      <UserState>
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<FirstPage />} />
        <Route path="/SapLogin" element={<SapLogin />} />
        <Route path="/excelpage" element={<ExcelR/>}></Route>
        <Route path="/PhoneSignUp" element={<PhoneSignUp />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/PopUp/" element={<PopUp />} />
        <Route path="/PopUp/:id" element={<PopUpCompany />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/Notification" element={<Notification />} />
        <Route path="/AdminNavTemplate" element={<AdminNavTemplate />} />
      </Routes>
      </UserState>
    </CompanyState>
  );
}

export default App;
