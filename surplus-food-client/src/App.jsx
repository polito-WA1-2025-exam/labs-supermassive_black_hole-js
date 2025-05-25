
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import EstablishmentDisplay from './components/Establishment'
import { Container } from 'react-bootstrap'


import { useState } from 'react'

function App() {

  return (
    <>
      <Header/>
      <EstablishmentDisplay/>
      <Footer/>
    </>
  )
} 

export default App
