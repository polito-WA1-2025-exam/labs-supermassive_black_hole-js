import { Container, Navbar, Button, Row, Col } from "react-bootstrap"

function Header(props) {

  const handleRedirect = () => {
    window.open('about:blank', '_blank');
  };

  return <Navbar bg='primary py-3 mt-auto'>
            <Container fluid className="px-4 d-flex justify-content-between">
              <h1 className="text-light">Welcome user!</h1>
              <Button variant="primary" onClick={handleRedirect}>
                Open Blank Page
              </Button>
            </Container>
          </Navbar>
}

export default Header