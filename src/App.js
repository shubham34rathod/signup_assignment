// import logo from './logo.svg';
// import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import Home from './component/Home';
import User from './component/User';
import Admin from './component/Admin';
import Client from './component/Client';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import SignUp from './component/SignUp';

function App() {
  return <>
    {/* <Home></Home> */}
    {/* <User></User> */}
    {/* <Admin></Admin> */}
    {/* <Client></Client> */}
    <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/user_login' element={<User></User>}></Route>
          <Route path='/client_login' element={<Client></Client>}></Route>
          <Route path='/admin_login' element={<Admin></Admin>}></Route>
          <Route path='/signup' element={<SignUp></SignUp>}></Route>
        </Routes>
    </BrowserRouter>
  </>
}

export default App;
