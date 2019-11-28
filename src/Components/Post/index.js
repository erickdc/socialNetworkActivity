import React from "react";
import { Card, Button } from "react-bootstrap";

export class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <Card border="dark" style={{ width: "50rem" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <Card.Text>{body}</Card.Text>
          <Button variant="primary">Look Comments</Button>
        </Card.Body>
      </Card>
    );
  }
}
