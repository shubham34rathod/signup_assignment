import '../css/signup.css'

function SignUp() {
    return <>
        <div className="signup_container">
            <div className="signup_box_1">
                <p>
                    <i class="bi bi-person-fill"></i>
                    <h5 className="signup_title">Create Account</h5>
                </p>
                <form >
                    <div class="form-floating mb-4 mt-4">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Confirm Password</label>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit">Create</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default SignUp