// Import the correct hook
import { useRef } from "react";
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import axios from "axios";
import "./register.css";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate(); // Use useNavigate here

  const handleClick = async (e) => {
    e.preventDefault();
    if (passwordAgain.current.value !== password.current.value) {
      passwordAgain.current.setCustomValidity("Passwords don't match!");
    } else {
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try {
        await axios.post("/auth/register", user);
        navigate("/login"); // Use navigate instead of history.push
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          {/* <h3 className="loginLogo">Lamasocial</h3> */}
          <span className="loginDesc">
            {/* Connect with friends and the world around you on Lamasocial. */}
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            {/* Your input fields go here */}
            <button className="loginButton" type="submit">
              Sign Up
            </button>
            <button className="loginRegisterButton" onClick={() => navigate("/login")}>
              Log into Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
