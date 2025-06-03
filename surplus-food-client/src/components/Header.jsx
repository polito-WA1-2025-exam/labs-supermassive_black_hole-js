import { Container, Navbar, Button } from "react-bootstrap"
import { useNavigate, useLocation, Link } from "react-router"
import { useState, useEffect } from 'react'

function Header(props) {
  const [welcome, setWelcome] = useState(true)

  // this timeout is not very important
  useEffect(() => {
    setTimeout(() => { setWelcome(false) }, 2000)
  }, [] )

  const navigate = useNavigate();
  const location = useLocation();

  const handleButtonClick = () => {
    navigate('/new-page');
  };

  // This constant is used to verify if the user is logged in or not, so it can display the right button
  const islogin = location.pathname === '/login';

  return <Navbar bg='primary py-3 mt-auto'>
            <Container fluid className="px-4 d-flex justify-content-between">
              <h1 className="text-light">Welcome user!</h1>
              <Button variant="primary" onClick={handleButtonClick}>
                Go to new page
              </Button>
              {/* alternatively display login or logout button */}
              {!islogin && !props.loggedIn &&
                <Link to={'/login'}>
                  <Button >Login</Button>
                </Link>
              }
              {props.loggedIn && 
                <Button onClick={()=>props.handleLogout()}>
                  Logout
                </Button>
              }
            </Container>
          </Navbar>
}

export default Header