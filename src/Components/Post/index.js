import React from "react";
import { Card } from "react-bootstrap";

export class Post extends React.Component {
  render() {
    const { title, body } = this.props;
    return (
      <Card border="dark" style={{ width: "50rem" }}>
        <Card.Header>{title}</Card.Header>
        <Card.Body>
          <img src="https://picsum.photos/600/300?grayscale" alt="..."></img>

          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
