// Feed Component

// Displays a number of posts equal to its 'posts' prop
// Defaults to show all

import { useState, useEffect } from 'react';

import Card from 'react-bootstrap/Card';

import { getPosts } from '../../services/postsService';

export default function Feed(props) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts()
            .then(setPosts)
            .catch(console.log);
    }, []);

    const postsToShow = 
        typeof props.posts === 'number' 
        ? 
        props.posts : posts.length;

    const postCards = posts
        .slice(0, postsToShow)
        .map((post) => (
            <Card key={ post.id }>
                <Card.Body>
                    <Card.Title>{ post.title.toUpperCase() }</Card.Title>
                    <Card.Text>{ post.body }</Card.Text>
                </Card.Body>
            </Card>
    ));

    return (
        <>
            { postCards }
        </>
    );
}