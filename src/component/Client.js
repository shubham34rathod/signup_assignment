import '../css/client.css'

function Client() {
    return <>
        <div className="client_container">
            <div className="client_box_1">
                <p>
                    <i class="bi bi-person-fill"></i>
                    <h5 className="client_title">client Login</h5>
                </p>
                <form class="row g-3 needs-validation" novalidate>
                    <div class="form-floating mb-4 mt-4">
                        <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" required/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div class="form-floating mb-4">
                        <input type="password" class="form-control" id="floatingPassword" placeholder="Password" required/>
                        <label for="floatingPassword">Password</label>
                        <p className="client_forgotPassword">Forgot Password</p>
                    </div>
                    <div class="d-grid gap-2">
                        <button class="btn btn-primary" type="submit">Button</button>
                    </div>
                </form>
            </div>
        </div>
    </>
}

export default Client