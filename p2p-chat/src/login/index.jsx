import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./login.css";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCl1BRqEhNXaJggG6O2bbhiwWfMawNnDvI",
  authDomain: "computernetwork-9dfeb.firebaseapp.com",
  projectId: "computernetwork-9dfeb",
  storageBucket: "computernetwork-9dfeb.appspot.com",
  messagingSenderId: "734668976914",
  appId: "1:734668976914:web:e9118f695e0452129fb9cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function Login( {user, setUser, setLogin} ) {
    const navigate = useNavigate();

    const [openAlert, setOpenAlert] = useState(false);

    const handleAlert = () => {
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false)
        }, 1200);
    }

    const handleLogin = () => {
        Axios.post("../../../server/app.py")
            .then((response)=>{
                
                handleAlert();
                setLogin(true);
                navigate("../chat");
            })
            .catch((err)=>{})
    }

    return (
            <div className="Login d-flex flex-column align-content-center justify-content-center align-items-center w-100 vh-100">
                    <div className="LoginTo pe-0">
                        <p className="display-2 text-center fw-bold text-light p-0">Login to P2P
                            <i className="LoginIcon fa-regular fa-message text-center"></i>
                        </p>
                    </div>
                    <div className="FillForm col d-flex justify-content-center col-4 m-3">
                        <form className="fs-3 row d-flex flex-column col-10 mt-5 mb-5">
                            <div className="mt-3 mb-3 ps-0 pe-0">
                                <label for="exampleInputEmail1" className="form-label fs-1 fw-bold mb-3">Username</label>
                                <input type="text" className="InputFill form-control form-control-lg border-0" aria-label="default input example" />
                            </div>
                            <div className="mt-3 mb-3 ps-0 pe-0">
                                <label for="exampleInputPassword1" className="form-label fs-1 fw-bold mb-3">Password</label>
                                <input type="password" className="InputFill form-control form-control-lg border-0" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="LoginBtn btn btn-primary btn-lg mt-3 mb-3" onClick={()=>handleLogin()}>
                                <p className="fs-2 fw-bold">Login</p> 
                            </button>
                            <p className="fs-3 mt-3 mb-3 text-end">New?
                                <span className="SignUpLink" onClick={()=>navigate("../sign-up")}>
                                    <p className="d-inline p-2">Create Account</p>
                                </span>
                            </p>
                            {openAlert && 
                                <div class="alert alert-danger d-flex align-items-center justify-content-center" role="alert">
                                    <i class="fa-solid fa-triangle-exclamation"></i>
                                    <div className="ms-3">
                                        Incorrect username or password
                                    </div>
                                </div>
                            }
                        </form>
                    </div>
            </div>
    );
  }
  
  export default Login;