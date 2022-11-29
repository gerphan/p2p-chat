import React from "react";
import { useNavigate } from "react-router-dom";
import "./login.css"

function Login() {
    const navigate = useNavigate();

    return (
            <div className="Login d-flex flex-column align-content-center justify-content-center align-items-center w-100 vh-100">
                    <div className="LoginTo pe-0">
                        <p className="display-2 text-center fw-bold text-light p-0">Login to P2P
                            <i className="LoginIcon fa-regular fa-message text-center"></i>
                        </p>
                    </div>
                    <div className="FillForm col d-flex justify-content-center bg-light col-3 m-3">
                        <form className="fs-3 row d-flex flex-column col-10 mt-5 mb-5">
                            <div className="mt-3 mb-3 ps-0 pe-0">
                                <label for="exampleInputEmail1" className="form-label">Username</label>
                                <input type="text" className="InputFill form-control form-control-lg" aria-label="default input example" />
                            </div>
                            <div className="mt-3 mb-3 ps-0 pe-0">
                                <label for="exampleInputPassword1" className="form-label">Password</label>
                                <input type="password" className="InputFill form-control form-control-lg" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" className="LoginBtn btn btn-primary btn-lg mt-3 mb-3" onClick={()=>navigate("../chat")}>
                                <p className="fs-2">Login</p> 
                            </button>
                            <p className="fs-3 m-3 text-end">New?
                                <span className="SignUpLink mb-5" onClick={()=>navigate("../sign-up")}>
                                    <p className="d-inline p-2 text-decoration-underline text-primary">Create Account</p>
                                </span>
                            </p>
                        </form>
                    </div>
            </div>
    );
  }
  
  export default Login;