import React from "react";
import { Card, Button } from "react-bootstrap";

export class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{body}</Card.Text>
          <Button variant="primary">Look Comments</Button>
        </Card.Body>
      </Card>
    );
  }
}
