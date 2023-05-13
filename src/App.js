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
import FirstPageNav from "./components/FirstPageNav";
import ExcelR from "./components/excelpage";
import PopUpCompany from "./components/Student/PopUpCompany";
import { CompanyState } from "./context/CompanyContext";
import { UserState } from "./context/UserContex";
import Statistics from "./components/Admin/statistics";
import AuthProvider from "./context/authContextk";
import EditProfile from "./components/Student/EditProfile";
import SelectedCompanies from "./components/Student/SelectedCompanies";
import StudentLoginPage from "./components/Student/StudentLoginPage.js"
import AdminLoginPage from "./components/Admin/AdminLoginPage";
import RecruitProcess from "./components/RecruitProcess";
import ContactUs from "./components/ContactUs";
import PrevRep from "./components/PrevRep";
function App() {
  return (
    <CompanyState>
      <UserState>
      <Navbar />
      <AuthProvider>

      <Routes>
        {/* <Route path="/" element={<HomePage />} /> */}
        <Route path="/" element={<FirstPage />} />
        <Route path="/firstPageNav" element={<FirstPageNav />} />
        <Route path="/recruitProcess" element={<RecruitProcess />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/prevRep" element={<PrevRep />} />
        {/* <Route path="/SapLogin" element={<SapLogin />} /> */}
        <Route path="/AdminLoginPage" element={<AdminLoginPage />} />
        <Route path="/StudentLoginPage" element={<StudentLoginPage />} />
        <Route path="/excelpage" element={<ExcelR/>}></Route>
        <Route path="/PhoneSignUp" element={<PhoneSignUp />} />
        <Route path="/Otp" element={<Otp />} />
        <Route path="/secondPage" element={<SecondPage />} />
        <Route path="/editProfile" element={<EditProfile />} />
        <Route path="/PopUp/" element={<PopUp />} />
        <Route path="/PopUp/:id" element={<PopUpCompany />} />
        {/* <Route path="/adminLogin" element={<AdminLogin />} /> */}
        <Route path="/admin" element={<Admin />} />
        <Route path="/Notification" element={<Notification />} />
        {/* <Route path="/AdminNavTemplate" element={<AdminNavTemplate />} /> */}
        <Route path="/stats" element={<Statistics />} />
        

      </Routes>
      </AuthProvider>
      </UserState>
    </CompanyState>
  );
}

export default App;
