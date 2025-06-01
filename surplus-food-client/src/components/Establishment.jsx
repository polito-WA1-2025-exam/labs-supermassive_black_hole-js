import my_image from '../assets/gigachad.png'
import my_image_2 from '../assets/random meme.jpg'
import { Container, Row, Col, Card } from 'react-bootstrap';

// The establishments data are passed as props here.
function ListEstablishments(props) {

    const establishments = props.establishments;

    const half = Math.ceil(establishments.length / 2);
    const row1 = establishments.slice(0, half);
    const row2 = establishments.slice(half);
      
    return (
        <Container className="mt-4 flex-grow-1">
            <Row className="mb-4">
                {row1.map(card => (
                    <Col key={card.id} md={4}>
                        <Card>
                        <Card.Img variant='top' src={my_image}
                        style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '0 auto', paddingTop: '10px' }}/>
                        <Card.Body>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Text>{card.address}</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
            <Row>
                {row2.map(card => (
                    <Col key={card.id} md={4}>
                        <Card>
                        <Card.Img variant='top' src={my_image_2}
                        style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '0 auto', paddingTop: '10px' }}/>
                        <Card.Body>
                            <Card.Title>{card.name}</Card.Title>
                            <Card.Text>{card.address}</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default ListEstablishments;