import my_image from '../assets/gigachad.png'
import { Container, Row, Col, Card } from 'react-bootstrap';

// The establishments data are passed as props here.
function ListEstablishments(props) {

    const establishments = props.establishments;

    // take only the first N establishments to display
    const firstNEstablishments = establishments.slice(0, 4);
      
    return (
        <Container className="mt-4 flex-grow-1 d-flex flex-row">
            
            {firstNEstablishments.map(card => (
                <Card key={card.id} className='m-4' style={ {width: '200px'}}>
                <Card.Img variant='top' src={my_image}
                style={{ objectFit: 'cover', margin: '0 auto', paddingTop: '10px' }}/>
                <Card.Body>
                    <Card.Title>{card.name}</Card.Title>
                    <Card.Text>{card.address}</Card.Text>
                </Card.Body>
                </Card>
            ))}
        </Container>
    );
}

export default ListEstablishments;