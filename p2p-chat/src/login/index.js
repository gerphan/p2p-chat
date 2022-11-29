import "./login.css"

function Login() {
    return (
        <div className="Login d-flex align-self-start row">
            <div className="LoginContainer container-lg d-flex justify-content-center align-content-center row">
                <p className="display-2 text-center fw-bold text-light p-0">Login to P2P
                    <i className="LoginIcon fa-regular fa-message text-center"></i>
                </p>
                <div className="FillForm col d-flex justify-content-center bg-light col-lg-3 m-5">
                    <form className="fs-3 row d-flex flex-column col-lg-10 mt-5 mb-5">
                        <div className="mt-3 mb-3">
                            <label for="exampleInputEmail1" className="form-label">Username</label>
                            <input type="text" className="InputFill form-control form-control-lg" aria-label="default input example" />
                        </div>
                        <div className="mt-3 mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="InputFill form-control form-control-lg" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="LoginBtn btn btn-primary btn-lg mt-3 mb-3">Login</button>
                        <p className="fs-3 m-3 text-center">New?
                            <a href="#" className="SignUpLink mb-5">
                                <p className="d-inline p-2">Create Account</p>
                            </a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default Login;