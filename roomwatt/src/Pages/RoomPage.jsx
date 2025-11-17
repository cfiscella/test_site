// src/components/RoomPage.jsx
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { RoomContext } from "../RoomContext.jsx";
import AddApplianceForm from "../AddApplianceForm.jsx";

const RoomPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rooms, addAppliance, deleteAppliance } = useContext(RoomContext);
  const [showForm, setShowForm] = useState(false);

  const room = rooms.find((r) => r.id.toString() === id);
  if (!room) return <p>Room not found</p>;

  return (
    <Container className="mt-4 room-page-container">
      <Row className="mb-3">
        <Col className="d-flex justify-content-between align-items-center">
          <h3>{room.name}</h3>
          <Button variant="secondary" onClick={() => navigate("/")}>
            ← Back
          </Button>
        </Col>
      </Row>

      {/* New: subtle helper text under the header */}
      <Row className="mb-3">
        <Col>
          <p className="room-page-subtitle">
            Add or remove appliances in this room to see their daily energy usage.
          </p>
        </Col>
      </Row>

      <Row xs={1} md={3} className="g-4">
        {room.appliances.map((a) => (
          <Col key={a.id}>
            <Card>
              <Card.Body>
                <h4>{a.icon}</h4>
                <p>{a.name}</p>
                <p>{a.getDailyConsumption()} W/day</p>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => deleteAppliance(room.id, a.id)}
                >
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
        <Col>
          <Card
            className="d-flex align-items-center justify-content-center"
            style={{ height: "100px", cursor: "pointer" }}
            onClick={() => setShowForm(true)}
          >
            <h3>+ Add Appliance</h3>
          </Card>
        </Col>
      </Row>

      <AddApplianceForm
        show={showForm}
        handleClose={() => setShowForm(false)}
        onSave={(appliance) => addAppliance(room.id, appliance)}
      />
    </Container>
  );
};


export default RoomPage;