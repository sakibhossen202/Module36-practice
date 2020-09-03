import React from 'react';
import { Card, Button } from 'react-bootstrap';

const Headlines = (props) => {
    console.log(props.article)
    const {title,description,author} = props.article
    console.log(description)
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Text>
            {description}
            </Card.Text>
            <Button variant="primary">Click Here</Button>
        </Card.Body>
        </Card>
    );
};

export default Headlines;