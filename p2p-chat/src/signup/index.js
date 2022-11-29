import "./signup.css"

function SignUp() {
    return (
        <div className="Signup">
            <div className="container-lg">
                <p className="display-1 mt-5 mb-5 text-center fw-bold">SIGN UP</p>
                <div className="row d-flex justify-content-center bg-light">
                    <form className="display-6 d-flex flex-column col-lg-6">
                        <div className="mt-3 mb-3">
                            <label for="exampleInputEmail1" className="form-label">Username</label>
                            <input type="text" className="form-control form-control-lg p-3" aria-label="default input example" />
                        </div>
                        <div className="mt-3 mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input type="password" className="form-control form-control-lg p-3" id="exampleInputPassword1" />
                        </div>
                        <div className="mt-3 mb-3">
                            <label for="exampleInputPassword1" className="form-label">Re-enter password</label>
                            <input type="password" className="form-control form-control-lg p-3" id="exampleInputPassword1" />
                        </div>
                        <button type="submit" className="btn btn-primary btn-lg mt-5 mb-5 p-3">Sign Up</button>
                    </form>
                </div>
            </div>
        </div>
    );
  }
  
  export default SignUp;