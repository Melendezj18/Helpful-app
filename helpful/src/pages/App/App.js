import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom'
import AuthPage from '../AuthPage/AuthPage';
import MainPage from '../MainPage/MainPage';
import CleaningPage from '../CleaningPage/CleaningPage';
import ScheduledServices from '../ScheduledServices/ScheduledServices';
import NavBar from '../../components/NavBar/NavBar';
import UnderConstructionPage from '../UnderConstructionPage/UnderConstructionPage';
import Homes from '../Homes/Homes';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';


import { getUser, getUserInfo } from '../../utilities/users-service';

export default function App() {
  const [user, setUser] = useState(getUser())
  const [userName, setUserName] = useState('')
  const [userId, setUserId] = useState(null)

  useEffect(() => {
    setUserName(getUserInfo("userName"))
    setUserId(getUserInfo("userId"))
  })

  return (
    <main className='App'>
      {user ?
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            <Route path='/' element={<MainPage user={user} setUser={setUser} />} />
            <Route path='/cleaning' element={<CleaningPage user={user} setUser={setUser} />} />
            <Route path='/scheduledservices' element={<ScheduledServices user={user} setUser={setUser} userId={userId} />} />
            <Route path='/underconstruction' element={<UnderConstructionPage user={user} setUser={setUser} />} />
            <Route path='/homes' element={<Homes user={user} setUser={setUser} />} />
          </Routes>
        </>
        :
        <AuthPage setUser={setUser} />
      }

    </main>
  )
}