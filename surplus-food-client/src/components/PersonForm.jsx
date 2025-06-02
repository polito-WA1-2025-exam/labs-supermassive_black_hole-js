import { Button, Form, Alert } from "react-bootstrap";
import { useState } from "react";
import { addPerson } from "../API/API";

function PersonForm({ onPersonAdded }) {
    const [formData, setFormData] = useState({
        name: '',
        surname: ''
    });
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        
        // Validazione semplice
        if (!formData.name.trim() || !formData.surname.trim()) {
            setMessage("Please fill in both name and surname");
            return;
        }
        
        setLoading(true);
        setMessage('');
        
        try {
            // Here we call the API to add a new person
            const newPerson = await addPerson(formData.name.trim(), formData.surname.trim());
            setMessage("Person added successfully");
            // Reset del form dopo l'inserimento
            setFormData({ name: '', surname: '' });
            
            // Callback opzionale per notificare il componente padre
            if (onPersonAdded) {
                onPersonAdded(newPerson);
            }
        } catch (error) {
            setMessage("Insert failed: " + error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <h4>Add New Person</h4>
            {message && (
                <Alert variant={message.includes("success") || message.includes("successfully") ? "success" : "danger"} className="mb-3">
                    {message}
                </Alert>
            )}
            <Form onSubmit={handleFormSubmit}>
                <Form.Group className="mb-3">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Enter name"
                        disabled={loading}
                    />
                </Form.Group>
                
                <Form.Group className="mb-3">
                    <Form.Label>Surname</Form.Label>
                    <Form.Control
                        type="text"
                        name="surname"
                        value={formData.surname}
                        onChange={handleInputChange}
                        placeholder="Enter surname"
                        disabled={loading}
                    />
                </Form.Group>
                
                <Button 
                    type="submit"
                    variant="success"
                    disabled={loading}
                >
                    {loading ? "Adding..." : "Add Person"}
                </Button>
            </Form>
        </div>
    );
}

export default PersonForm;