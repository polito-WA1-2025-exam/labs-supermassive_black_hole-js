import { useState } from 'react'
//import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './components/Header'
import Footer from './components/Footer'
import { Container } from 'react-bootstrap'

function App() {

  return (
    <>
      <Header/>
      <Container fluid className='flex-grow-1'>
        <p>Welcome to Surplus Food Website.</p>
        <p>This is the user web-page.</p>
        <p>We're still working on the website.</p>
      </Container>
      <Footer/>
    </>
  )
}

export default App
