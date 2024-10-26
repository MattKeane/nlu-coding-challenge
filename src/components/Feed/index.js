import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

import { getPosts } from '../../services/postsService';

export default function Feed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then(setPosts)
            .catch(console.log);
    }, []);

    const postList = posts.map((post) => (
        <Card key={ post.id }>
            <Card.Title>{ post.title }</Card.Title>
            <Card.Body>{ post.body }</Card.Body>
        </Card>
    ));

    return (
        <>
            { postList }
        </>
    );
}