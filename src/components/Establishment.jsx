import Card from 'react-bootstrap/Card'
import my_image from '../assets/gigachad.png'
import my_image_2 from '../assets/random meme.jpg'
import my_image_3 from '../assets/mucho texto yoda.jpg'
import { Container } from 'react-bootstrap'

function EstablishmentDisplay(props) {
      
    return(
        <Container fluid className='d-flex flex-grow-1 flex-row py-4'>
            <Card className='m-4' style={{ width: '18rem', maxHeight: '30rem' }}>
                <Card.Img variant="top" src={my_image} />
                <Card.Body>
                    <Card.Title>Gigachad store</Card.Title>
                    <Card.Text>
                        A store for gigachads.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-4' style={{ width: '18rem', maxHeight: '30rem' }}>
                <Card.Img variant="top" src={my_image_2} />
                <Card.Body>
                    <Card.Title>Computer store</Card.Title>
                    <Card.Text>
                        Yeah, computers are definitely magic.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className='m-4' style={{ width: '18rem', maxHeight: '30rem' }}>
                <Card.Img variant="top" src={my_image_3}/>
                <Card.Body>
                    <Card.Title>Yoda restaurant</Card.Title>
                    <Card.Text>
                        Mucho texto.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default EstablishmentDisplay