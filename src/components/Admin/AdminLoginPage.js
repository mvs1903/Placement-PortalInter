import { useCallback ,useState} from "react";
import { useNavigate } from "react-router-dom";
import "./AdminLoginPage.css";
const AdminLoginPage = () => {
  const navigate = useNavigate();
  const [adminMail, setAdminMail] = useState("");
  const [adminPass, setadminPass] = useState("");
  
  // hardcoded
  const hardMail = "admin";
  const hardPass = "admin123";

  const onRectangleButtonClick = useCallback(() => {
    navigate("/StudentLoginPage");
  }, [navigate]);

  const onStudentTextClick = useCallback(() => {
    navigate("/StudentLoginPage");
  }, [navigate]);

  // const onSubmitBtnClick = useCallback(() => {
  //   const anchor = document.querySelector("[data-scroll-to='rectangleInput']");
  //   if (anchor) {
  //     anchor.scrollIntoView({ block: "start", behavior: "smooth" });
  //   }
  // }, []);

  // const onSubmitBtn1Click = useCallback(() => {
  //   // Please sync "Adminside" to the project
  // }, []);


  //--------------


  

  const handleLogin = (e) => {
    e.preventDefault();
    if (adminMail === "" || adminPass === "") {
      alert("Email or Password cannot be empty!");
    } 
    else if(adminMail === hardMail && adminPass === hardPass) {
      navigate("/admin");
    }
    else{
      alert("Wrong ID or Password")
    }
  };

  const handleAdminMail = (e) => {
    setAdminMail(e.target.value);
    console.log(adminMail);
  };

  const handleAdminPass = (e) => {
    setadminPass(e.target.value);
    console.log(adminPass);
  };


  //--------------

  return (
    <div className="adminloginpage">
      <section className="adminloginpage-child" id="sideNav" />
      <img className="adminloginpage-item" alt="" src="logodjsce.webp" />
      <h4 className="djsce-placement-portal-container" id="navText">
        <p className="djsce">DJSCE</p>
        <p className="djsce"> PLACEMENT PORTAL</p>
      </h4>
      <div className="adminloginpage-inner" />
      <button className="rectangle-button" onClick={onRectangleButtonClick} />
      <button className="adminloginpage-child1" id="AdminBtn" />
      <div className="student" onClick={onStudentTextClick}>
        Student
      </div>
      <label className="admin" htmlFor="AdminBtn">
        Admin
      </label>
      <input
        className="rectangle-input"
        type="password"
        placeholder="Password"
        id="pass"
        onChange={handleAdminPass}
      />
      {/* <input
        className="adminloginpage-child2"
        type="number"
        placeholder="Please Enter OTP"
        data-scroll-to="rectangleInput"
      /> */}
      <button className="submit-btn" id="loginBtn" onClick={handleLogin} />
      {/* <button
        className="submit-btn1"
        id="verifyBtn"
        name
        onClick={onSubmitBtn1Click}
      /> */}
      <label className="login-admin" htmlFor="loginBtn">
        Login
      </label>
      {/* <label className="verify-otp" htmlFor="verifyBtn">
        Verify OTP
      </label> */}
      {/* <div className="otp-sent-to">OTP sent to number</div> */}
      <input
        className="adminloginpage-child3"
        type="text"
        placeholder="User Name"
        required
        id="Username"
        onChange={handleAdminMail}
      />
    </div>
  );
};

export default AdminLoginPage;
