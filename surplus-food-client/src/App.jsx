//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { loadEstablishments } from './API/API'

import { Container } from 'react-bootstrap'
import { useState, useEffect } from 'react'
import { Routes, Route, useNavigate } from 'react-router'
import ListEstablishments from './components/Establishment'


function App() {

  // Application state
  const [establishments, setEstablishments] = useState([])
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  // Load the list of establishments at application startup
  useEffect(() => {
    setErrMsg('')
    setLoading(true)
    loadEstablishments().then((dataLoaded) => {
      setEstablishments(dataLoaded)
      setLoading(false)
    }).catch((ex)=>{
      console.log("<App> received error:" + ex)
      setErrMsg('Loading error... please try again')
    })
  }, [])

  //hook to navigate between pages
  const navigate = useNavigate();
 
  return (
    <>
      {errMsg && <div className="alert alert-danger">{errMsg}</div>}
      {loading && <div className="text-center">...page loading...</div>}

      {!errMsg && !loading && (
        <>
          <Header />
          <Routes>
            <Route path="/" element={<ListEstablishments establishments={establishments} />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  )
} 

export default App
