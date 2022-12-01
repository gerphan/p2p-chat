import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./signup.css"

function SignUp( {user, setUser} ) {
    const navigate = useNavigate();

    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');

    const handleSignup = () => {
        setAlertMessage()
        setOpenAlert(true);
        setTimeout(() => {
            setOpenAlert(false)
        }, 1200);
        // navigate('../')
    }

    return (
        <div className="Signup d-flex flex-column align-content-center justify-content-center align-items-center w-100 vh-100">
            <div className="SignupTo pe-0">
                <p className="display-2 text-center fw-bold text-light p-0">Signup P2P
                    <i className="SignupIcon fa-regular fa-message text-center"></i>
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
                    <div className="mt-3 mb-3 ps-0 pe-0">
                        <label for="exampleInputPassword1" className="form-label fs-1 fw-bold mb-3">Re-enter password</label>
                        <input type="password" className="InputFill form-control form-control-lg border-0" id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="SignupBtn btn btn-primary btn-lg mt-3 mb-3 fw-bold" onClick={()=>handleSignup()}>
                        <p className="fs-2">Signup</p> 
                    </button>
                    <p className="fs-3 mt-3 mb-3 text-end">Have account?
                        <span href="#" className="SignUpLink" onClick={()=>navigate("../")}>
                            <p className="d-inline p-2">Login</p>
                        </span>
                    </p>
                    {openAlert &&
                        <div class="ExistedUsername alert alert-danger d-flex align-items-center justify-content-center" role="alert">
                            <i class="fa-solid fa-triangle-exclamation"></i>
                            <div className="ms-3">
                                Existed username
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div>
    );
  }
  
  export default SignUp;