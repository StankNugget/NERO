import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const NeroForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    age: '',
    gender: '',
    interests: '',
    occupation: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group>
        <Form.Label>Age</Form.Label>
        <Form.Control
          type="text"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Gender</Form.Label>
        <Form.Control
          type="text"
          name="gender"
          value={formData.gender}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Interests</Form.Label>
        <Form.Control
          type="text"
          name="interests"
          value={formData.interests}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Occupation</Form.Label>
        <Form.Control
          type="text"
          name="occupation"
          value={formData.occupation}
          onChange={handleChange}
        />
      </Form.Group>
      <Button type="submit">Submit</Button>
    </Form>
  );
};

export default NeroForm;
