import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import "./index.css";

export class Comment extends React.Component {
  render() {
    const { name, body } = this.props;
    return (
      <Card bg="light" style={{ width: "50rem" }}>
        <Card.Body>
          <Row>
            <Col xs="1">
              <Card.Img
                src="https://image.flaticon.com/icons/svg/145/145845.svg"
                alt="Card image"
              />
            </Col>
            <Col>
              <Card.Text className="name">
                <a href="">{name}</a>
                <span> {body}</span>
              </Card.Text>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    );
  }
}
