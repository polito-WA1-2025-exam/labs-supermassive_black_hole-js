//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NewPage from './components/NewPage'
import LoginForm from './components/LoginForm'
import { loadEstablishments, loadPeople, logIn, logout, getCurrentUser } from './API/API'

import { useState, useEffect } from 'react'
import { Routes, Route, Navigate, useNavigate } from 'react-router'
import ListEstablishments from './components/Establishment'

/*
  Basically for each object/entity in the software
  you need set some states and to make a promise.
*/

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [establishments, setEstablishments] = useState([])
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(true)
  const [errMsg, setErrMsg] = useState('')
  const [message, setMessage] = useState('');
  const [user, setUser] = useState('');

  const navigate = useNavigate();

  // This function is used to mantain the session even after refreshing the page
  const checkCurrentSession = async () => {
    try {
      // if logged in getCurrentUser() will provide the session, otherwise an exception is throwed
      const currentUser = await getCurrentUser();
      setLoggedIn(true);
      setUser(currentUser);
    } catch (err) {
      // if not logged in, we just set the loggedIn state to false and continue as a guest
      setLoggedIn(false);
      setUser('');
    }
  };

  // login function
  const handleLogin = async (credentials) => {
    try {
      const loginUser = await logIn(credentials);
      setLoggedIn(true);
      setMessage({ msg: `Welcome, ${loginUser.name}!`, type: 'success' });
      setUser(loginUser);
      navigate('/'); // Redirect to homepage after login
    } catch (err) {
      setMessage({ msg: err, type: 'danger' })
    }
  }

  // logout function
  const handleLogout = async () => {
    await logout();
    setLoggedIn(false);
    setUser('');
    setMessage('');
    navigate('/'); // Redirect to homepage after logout
  }

  // Load data at application startup
  useEffect(() => {
    setErrMsg('')
    setLoading(true)
    
    // First verify the session, then load all the data
    Promise.all([
      checkCurrentSession(),
      loadEstablishments(), 
      loadPeople()
    ])
      .then(([_, establishmentsData, peopleData]) => {
        setEstablishments(establishmentsData)
        setPeople(peopleData)
        setLoading(false)
      })
      .catch((ex) => {
        console.log("<App> received error:" + ex)
        setErrMsg('Loading error... please try again')
        setLoading(false)
      })
  }, [])

  useEffect(() => {
    if (message && message.msg) {
      const timer = setTimeout(() => {
        setMessage('');
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message]);



 
  return (
    <>
      {message && message.msg && <div className={`alert alert-${message.type}`}>{message.msg}</div>}

      {loading ? (
        <div>...page loading...</div>
      ) : 
        <>
          <Header loggedIn={loggedIn} handleLogout={handleLogout} user={user} />
          { /* Here you can define the pages/routes */}
          <Routes>
            { /* Notice that the arguments of the elements are from useState
                 and they also contain the actual structure of the data models */ }
            <Route path="/" element={<ListEstablishments establishments={establishments} />} />
            <Route path="/new-page" element={<NewPage people={people} />} />
            <Route path="/login" element={loggedIn ? <Navigate replace to='/' /> : <LoginForm handleLogin={handleLogin} />} />
            <Route path="*" element={<h1>404 Page Not Found</h1>} />
          </Routes>
          { /* Routes are basically alternative content the website can display.
               They shouldn't be seen as pages as a whole                       */ } 
          <Footer />
        </>
      }
    </>
  )
} 

export default App
