import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

export default function QuoteForm() {
    return (
        <Form>
            <h3>Get a quote</h3>
            <FloatingLabel controlId="quoteFormName" label="Name">
                <Form.Control type="text" placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel controlId="quoteFormEmail" label="Email">
                <Form.Control type="email" placeholder="Email" />
            </FloatingLabel>
            <Form.Select aria-label="Select a capability">
                <option>Select a capability</option>
                <option value="design">Design</option>
                <option value="production">Production</option>
                <option value="certification">Certification</option>
            </Form.Select>
            <FloatingLabel controlId="quoteFormComments" label="Comments">
                <Form.Control as="textarea" rows={ 3 } />
            </FloatingLabel>
            <Form.Check 
                type="checkbox" 
                label="I'd like to receive the newsletter" 
                id="quoteFormNewsletter"
            />
        </Form>
    );
}