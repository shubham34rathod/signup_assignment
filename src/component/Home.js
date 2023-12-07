import { useNavigate } from 'react-router-dom'
import '../css/home.css'

function Home() {
    let navigate = useNavigate()

    return <>
        <div className="home_container">
            <h1>Select User Type</h1>
            <div className="home_userType">
                <div onClick={() => navigate('/user_login')}>
                    <input type="radio" name="radio" id="user" />
                    <label htmlFor="user"><i class="bi bi-people-fill"></i>&nbsp; User</label>
                </div>
                <div onClick={() => navigate('/client_login')}>
                    <input type="radio" name="radio" id="client" />
                    <label htmlFor="client"><i class="bi bi-person-check-fill"></i>&nbsp; Client</label>
                </div>
                <div onClick={() => navigate('/admin_login')}>
                    <input type="radio" name="radio" id="admin" />
                    <label htmlFor="admin"> <i class="bi bi-person-bounding-box"></i>&nbsp; Admin</label>
                </div>
                <div style={{ textAlign: 'center' }} onClick={()=>navigate('/signup')}>
                    <i class="bi bi-plus-square"></i> Create Account
                </div>
            </div>
        </div>
    </>
}

export default Home