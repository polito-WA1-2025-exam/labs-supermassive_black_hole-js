import Card from 'react-bootstrap/Card'
import my_image from '../assets/gigachad.png'

function EstablishmentDisplay(props) {
      
    return(
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={my_image} />
            <Card.Body>
                <Card.Title>Gigachad store</Card.Title>
                <Card.Text>
                    A store for gigachads.
                </Card.Text>
            </Card.Body>
        </Card>
    )
}

export default EstablishmentDisplay