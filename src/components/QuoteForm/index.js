// QuoteForm Component

// Displays a form
// Submits a POST request to the API

import { useState } from 'react';

import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { createPost } from '../../services/postsService';

export default function QuoteForm() {
    const defaultFormState = {
        name: '',
        email: '',
        capability: '',
        comments: '',
        newsletter: false,
    };

    const [formState, setFormState] = useState(defaultFormState);

    const handleChange = (e) => {
        if (e.target.name === 'newsletter') {
            setFormState((cur) => ({
                ...cur,
                [e.target.name]: e.target.checked,
            }));
        } else {
            setFormState((cur) => ({
                ...cur,
                [e.target.name]: e.target.value,
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        createPost(formState)
            .then(console.log);
            
        setFormState(defaultFormState);
    };

    return (
        <Form onSubmit={ handleSubmit }>
            <Container>
                <h3>Get a quote</h3>
                <FloatingLabel controlId="quoteFormName" label="Name">
                    <Form.Control 
                        type="text" 
                        placeholder="Name"
                        name="name"
                        value={ formState.name }
                        onChange={ handleChange } 
                    />
                </FloatingLabel>
                <FloatingLabel controlId="quoteFormEmail" label="Email">
                    <Form.Control 
                        type="email" 
                        placeholder="Email"
                        name="email"
                        value={ formState.email }
                        onChange={ handleChange } 
                    />
                </FloatingLabel>
                <Form.Select 
                    aria-label="Select a capability"
                    name="capability"
                    value={ formState.capability }
                    onChange={ handleChange }
                >
                    <option>Select a capability</option>
                    <option value="design">Design</option>
                    <option value="production">Production</option>
                    <option value="certification">Certification</option>
                </Form.Select>
                <FloatingLabel controlId="quoteFormComments" label="Comments">
                    <Form.Control 
                        as="textarea" 
                        rows={ 3 }
                        name="comments"
                        value={ formState.comments }
                        onChange={ handleChange } 
                    />
                </FloatingLabel>
                <Form.Group controlId="quoteFormNewsletter">
                    <Form.Check 
                        type="checkbox" 
                        label="I'd like to receive the newsletter"
                        name="newsletter"
                        onChange={ handleChange }
                        checked={ formState.checked }
                    />
                </Form.Group>
                <Button type="submit" variant="secondary">
                    Get a quote
                </Button>
            </Container>
        </Form>
    );
}