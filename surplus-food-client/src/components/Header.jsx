import { Container, Navbar, Button, Row, Col } from "react-bootstrap"

function Header(props) {

  return <Navbar bg='primary py-3 mt-auto'>
            <Container fluid className="px-4 d-flex justify-content-between">
              <h1 className="text-light">Welcome user!</h1>
              <Button variant="primary">
                Click here! (does nothing)
              </Button>
            </Container>
          </Navbar>
}

export default Header