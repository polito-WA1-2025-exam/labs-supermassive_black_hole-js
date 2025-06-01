//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import NewPage from './components/NewPage'
import { loadEstablishments, loadPeople } from './API/API'

import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router'
import ListEstablishments from './components/Establishment'

/*
  Basically for each object/entity in the software
  you need set some states and to make a promise.
*/

function App() {
  
  /*
    This part is super important:
    setting the states allows you to actually get the data
    from the server (see the API.js file).
  */

  const [establishments, setEstablishments] = useState([])
  const [people, setPeople] = useState([])
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState('')

  // Load data at application startup

  /*
    This part is what actually links the data received from API.js
    to the React components.
  */

  useEffect(() => {
    setErrMsg('')
    setLoading(true)
    
    Promise.all([loadEstablishments(), loadPeople()])
      .then(([establishmentsData, peopleData]) => {
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

  // I don't know if this hook will ever be used
  // const navigate = useNavigate();
 
  return (
    <>
      {errMsg && <div className="alert alert-danger">{errMsg}</div>}
      {loading && <div className="text-center">...page loading...</div>}

      {!errMsg && !loading && (
        <>
          <Header />
          { /* Here you can define the pages/routes */}
          <Routes>
            { /* Notice that the arguments of the elements are from useState
                 and they also contain the actual structure of the data models */ }
            <Route path="/" element={<ListEstablishments establishments={establishments} />} />
            <Route path="/new-page" element={<NewPage people={people} />} />
          </Routes>
          { /* Routes are basically alternative content the website can display.
               They shouldn't be seen as pages as a whole                       */ } 
          <Footer />
        </>
      )}
    </>
  )
} 

export default App
