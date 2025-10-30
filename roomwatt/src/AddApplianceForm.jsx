// src/components/AddApplianceForm.jsx
import React, { useState } from "react";
import { Form, Button, Modal, Alert } from "react-bootstrap";

const MAX_FILE_SIZE_MB = 2; // limit image size to 2MB
const AddApplianceForm = ({ show, handleClose, onSave }) => {
  const [form, setForm] = useState({
    icon: null,
    name: null,
    pluggedIn24_7: false,
    sleepHours: 0,
    wattsPerDay: 100,
    hoursUsed: 2, 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
      sleepHours: name === "pluggedIn24_7" && !checked ? 0 : form.sleepHours,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appliance = {
      ...form,
      id: Date.now(),
      getDailyConsumption() {
        if (this.pluggedIn24_7) {
          const activeHours = 24 - this.sleepHours;
          return (this.wattsPerDay / 24) * activeHours;
        }
        return this.wattsPerDay * this.hoursUsed;
      },
    };
    onSave(appliance);
    handleClose();
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add Custom Appliance</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Icon</Form.Label>
            <Form.Control
              type="text"
              name="icon"
              value={form.icon}
              onChange={handleChange}
              placeholder="e.g. "
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Appliance Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Check
              type="checkbox"
              label="Plugged in 24/7?"
              name="pluggedIn24_7"
              checked={form.pluggedIn24_7}
              onChange={handleChange}
            />
          </Form.Group>

          {form.pluggedIn24_7 && (
            <Form.Group className="mb-3">
              <Form.Label>Hours in Sleep</Form.Label>
              <Form.Control
                type="number"
                name="sleepHours"
                value={form.sleepHours}
                onChange={handleChange}
              />
            </Form.Group>
          )}

          <Form.Group className="mb-3">
            <Form.Label>Watts Used Per Day</Form.Label>
            <Form.Control
              type="number"
              name="wattsPerDay"
              value={form.wattsPerDay}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Hours Used</Form.Label>
            <Form.Control
              type="number"
              name="hoursUsed"
              value={form.hoursUsed}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save Appliance
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddApplianceForm;