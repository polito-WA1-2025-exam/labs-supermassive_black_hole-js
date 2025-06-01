import { Container, Navbar, Button, Row, Col } from "react-bootstrap"
import { useNavigate } from "react-router"

function Header(props) {

  // useNavigate allows you to actually change page
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/new-page');
  };

  return <Navbar bg='primary py-3 mt-auto'>
            <Container fluid className="px-4 d-flex justify-content-between">
              <h1 className="text-light">Welcome user!</h1>
              <Button variant="primary" onClick={handleButtonClick}>
                Go to new page
              </Button>
            </Container>
          </Navbar>
}

export default Header