import { useActionState } from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link } from "react-router";


function LoginForm(props) {
    // this is necessary in order to be able to acually submit the credentials
    const [state, formAction] = useActionState(submitCredentials, { email: '', password: '' })

    // This should be roughly the same for every login form
    async function submitCredentials(prevData, formData) {
        const credentials = {
            email: formData.get('email'),
            password: formData.get('password')
        }
        try {
            await props.handleLogin(credentials);
            return { success: true }
        }
        catch (error) {
            return { error: 'Invalid credentials' };
        }
    }

    // the actual form, nothing special here
    return <Container fluid className="flex-grow-1">
        <Form action={formAction}>
            <Form.Group controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' name="email" required />
            </Form.Group>

            <Form.Group controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' name='password' required></Form.Control>
            </Form.Group>

            {state.error && <p className="text-danger">{state.error}</p>}

            <Link className="btn btn-secondary" to={'/'}>Cancel</Link>
            <Button type='submit'>Login</Button>
        </Form>
    </Container>
}

export default LoginForm;