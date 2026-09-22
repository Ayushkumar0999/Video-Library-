import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { VideoLibraryHome } from "./components/VideoLibraryHome";
import { UserRegister } from './components/UserRegister';
import { UserLogin } from './components/UserLogin';
import { UserDashBoard } from "./components/UserDashboard";
import { UserLoginError } from './components/UserLoginError';
import { AdminLogin } from './components/AdminLogin';
import { AdminDashboard } from './components/AdminDashboard';
import { AddVideo } from './components/AddVideo';
import { EditVideo } from './components/EditVideo';
import { DeleteVideo } from './components/DeleteVideo';

import './App.css'

function App() {

  return (
       <div className="container-fluid">
      <BrowserRouter>
        <header className='bg-dark text-white p-2'>
          <h1 className='text-center'> <Link to="/" className='btn btn-dark btn-lg'>Video Library</Link> </h1>
        </header>
        <section>
          <Routes>
             <Route path='/' element={<VideoLibraryHome />} />
                    <Route path='user-register' element={<UserRegister />}  />
                    <Route path='user-login' element={<UserLogin />} />
                    <Route path='user-dashboard' element={<UserDashBoard />} />
                    <Route path='user-login-error' element={<UserLoginError />} />
                    <Route path='admin-login' element={<AdminLogin />} />
                    <Route path='admin-dashboard' element={<AdminDashboard />} />
                    <Route path='add-video' element={<AddVideo />} />
                    <Route path='edit-video/:id' element={<EditVideo />} />
                    <Route path='delete-video/:id' element={<DeleteVideo />} />
          </Routes>
        </section>
      </BrowserRouter>
    </div>
  )
}

export default App
