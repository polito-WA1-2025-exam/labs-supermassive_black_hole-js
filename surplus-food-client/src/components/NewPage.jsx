import { Button, Container, Alert, Row, Col } from "react-bootstrap";
import { useState } from "react";
import { addPerson } from "../API/API";
import PersonForm from "./PersonForm";

function NewPage(props) {
    const firstPerson = props.people && props.people.length > 0 ? props.people[0] : null;
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInsertPerson = async () => {
        setLoading(true);
        setMessage('');
        
        try {
            await addPerson("john", "doe");
            setMessage("Insert success");
        } catch (error) {
            setMessage("Insert failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    const handlePersonAdded = (newPerson) => {
        // Callback opzionale per gestire l'aggiunta di una nuova persona
        console.log("New person added:", newPerson);
        // Qui potresti aggiornare la lista delle persone se necessario
    };

    return (
        <Container className="mt-4 flex-grow-1">
            <h2>Welcome to a new page</h2>
            
            <Row className="mt-4">
                <Col md={6}>
                    {firstPerson ? (
                        <div className="mt-4">
                            <p><strong>First person:</strong> {firstPerson.name} {firstPerson.surname}</p>
                            <p><strong>ID:</strong> {firstPerson.id}</p>
                        </div>
                    ) : (
                        <p className="mt-4">No people available</p>
                    )}
                    
                    {message && (
                        <Alert variant={message.includes("success") ? "success" : "danger"} className="mt-3">
                            {message}
                        </Alert>
                    )}
                    
                    <Button 
                        variant="primary" 
                        onClick={handleInsertPerson}
                        disabled={loading}
                        className="mt-3"
                    >
                        {loading ? "Inserting..." : "Insert John Doe"}
                    </Button>
                </Col>
                
                <Col md={6}>
                    { /* It uses a callback */}
                    <PersonForm onPersonAdded={handlePersonAdded} />
                </Col>
            </Row>
        </Container>
    );
}

export default NewPage;