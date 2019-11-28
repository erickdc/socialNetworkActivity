import React from "react";
import { Card } from "react-bootstrap";
import styles from "./index.css";

export class Comment extends React.Component {
  render() {
    const { name, body } = this.props;
    return (
      <Card border="dark" style={{ width: "50rem" }}>
        <Card.Body>
          <Card.Text className={styles.name}>{name}</Card.Text>
          <Card.Text>{body}</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}
