import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./signup.css"
import Loading from "../loading/loading";

import { child, ref, set, update, onValue } from "firebase/database";
import {database} from "../firebase"


function SignUp( { existUser } ) {
    const db = ref(database);

    const navigate = useNavigate();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const [openAlert, setOpenAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [openLoading, setOpenLoading] = useState(false);

    const handleSignup = (e) => {
        e.preventDefault();

        setOpenLoading(true);

        if (password !== confirmPassword) {
            setOpenLoading(false);
            setAlertMessage('Password do not match')
            setOpenAlert(true);
            setTimeout(() => {
                setOpenAlert(false)
            }, 1200);
        } 
        else {
            let tmp = 0;
            existUser.every((value) => {
                if (value.username === username) {
                    setOpenLoading(false);
                    setAlertMessage('Existed username')
                    setOpenAlert(true);
                    setTimeout(() => {
                        setOpenAlert(false)
                    }, 1200);
                    return false;
                }
                else {
                    tmp++;
                    return true;
                }
            });
            if (tmp === existUser.length) {
                Axios.post("http://localhost:3001/cn-signup", {
                    id : existUser.length + 1,
                    username: username,
                    password: password
                })
                    .then(()=>{
                        setOpenLoading(false);
                        navigate('../');
                    })
                    .catch((err)=>{console.log(err)})
                
                set(child(db, 'account/' + (Number(existUser.length) + 1)), {
                    username: username,
                    password: password,
                    is_active: "false",
                });
            }
        } 
    }

    return (
        <div className="Signup d-flex flex-column align-content-center justify-content-center align-items-center w-100 vh-100">
            {openLoading && <Loading />}
            <div className="SignupTo pe-0">
                <p className="display-2 text-center fw-bold text-light p-0">Signup P2P
                    <i className="SignupIcon fa-regular fa-message text-center"></i>
                </p>
            </div>
            <div className="FillForm col d-flex justify-content-center col-4 m-3">
                <form className="fs-3 row d-flex flex-column col-10 mt-5 mb-5" onSubmit={(e) => handleSignup(e)}>
                    <div className="mt-3 mb-3 ps-0 pe-0">
                        <label for="exampleInputEmail1" className="form-label fs-1 fw-bold mb-3">Username</label>
                        <input type="text" className="InputFill form-control form-control-lg border-0" aria-label="default input example" 
                                onChange={e => setUsername(e.target.value)} />
                    </div>
                    <div className="mt-3 mb-3 ps-0 pe-0">
                        <label for="exampleInputPassword1" className="form-label fs-1 fw-bold mb-3">Password</label>
                        <input type="password" className="InputFill form-control form-control-lg border-0" id="exampleInputPassword1" 
                                onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div className="mt-3 mb-3 ps-0 pe-0">
                        <label for="exampleInputPassword1" className="form-label fs-1 fw-bold mb-3">Re-enter password</label>
                        <input type="password" className="InputFill form-control form-control-lg border-0" id="exampleInputPassword2" 
                            onChange={e => setConfirmPassword(e.target.value)}/>
                    </div>
                    <button type="submit" className="SignupBtn btn btn-primary btn-lg mt-3 mb-3 fw-bold" >
                        <p className="fs-2">Signup</p> 
                    </button>
                    <p className="fs-3 mt-3 mb-3 text-end">Have account?
                        <span href="#" className="SignUpLink" onClick={()=>navigate("../")}>
                            <p className="d-inline p-2">Login</p>
                        </span>
                    </p>
                    {openAlert &&
                        <div className="ExistedUsername alert alert-danger d-flex align-items-center justify-content-center" role="alert">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                            <div className="ms-3">
                                {alertMessage}
                            </div>
                        </div>
                    }
                </form>
            </div>
        </div>
    );
  }
  
  export default SignUp;