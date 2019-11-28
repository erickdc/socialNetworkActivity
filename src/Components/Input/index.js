import React from "react";
import { Form } from "react-bootstrap";

const Input = props => {
  const {
    controlId,
    required,
    name,
    type,
    handleChange,
    placeholder,
    as,
    handleKeyDown
  } = props;
  return (
    <Form.Group as={as} controlId={controlId}>
      <Form.Control
        required={required}
        name={name}
        type={type}
        onChange={handleChange}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
      />
    </Form.Group>
  );
};

export default Input;
