import '../css/user.css'

function User() {
    return <>
        <div className="user_container">
            <div className="user_box_1">
                <p>
                    <i class="bi bi-person-fill"></i>
                    <h5 className="user_title">Admin Login</h5>
                </p>
                <form >
                    <div class="form-floating mb-4">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" />
                        <label for="floatingPassword">Password</label>
                        <p className="user_forgotPassword">Forgot Password</p>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="button">Button</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default User