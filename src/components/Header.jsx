import { Container, Navbar } from "react-bootstrap"

function Header(props) {

  return <Navbar bg='primary'>
            <Container fluid>
              <h1 className="text-light">Welcome user!</h1>
            </Container>
          </Navbar>
}

export default Header