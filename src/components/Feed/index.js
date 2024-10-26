import { useEffect } from 'react';

import Card from 'react-bootstrap/Card';

import { getPosts } from '../../services/postsService';

export default function Feed() {
    useEffect(() => {
        getPosts()
            .then(console.log);
    });

    return (
        <Card>
            <Card.Title>Post Title</Card.Title>
            <Card.Body>Post body</Card.Body>
        </Card>
    );
}