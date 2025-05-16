import my_image from '../assets/gigachad.png'
import my_image_2 from '../assets/random meme.jpg'
import my_image_3 from '../assets/mucho texto yoda.jpg'
import { Container, Row, Col, Card } from 'react-bootstrap';

const establishmentData = [
    { id: 1, title: 'Card 1', content: 'This is the first card.'},
    { id: 2, title: 'Card 2', content: 'This is the second card.' },
    { id: 3, title: 'Card 3', content: 'This is the third card.' },
    { id: 4, title: 'Card 4', content: 'This is the fourth card.' },
    { id: 5, title: 'Card 5', content: 'This is the fifth card.' },
    { id: 6, title: 'Card 6', content: 'This is the sixth card.' },
];

function EstablishmentDisplay(props) {

    const half = Math.ceil(establishmentData.length / 2);
    const row1 = establishmentData.slice(0, half);
    const row2 = establishmentData.slice(half);
      
    return (
        <Container className="mt-4 flex-grow-1">
            <Row className="mb-4">
                {row1.map(card => (
                    <Col key={card.id} md={4}>
                        <Card>
                        <Card.Img variant='top' src={my_image}
                        style={{ width: '200px', height: '200px', objectFit: 'cover', margin: '0 auto', paddingTop: '10px' }}/>
                        <Card.Body>
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.content}</Card.Text>
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
                            <Card.Title>{card.title}</Card.Title>
                            <Card.Text>{card.content}</Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default EstablishmentDisplay