// src/components/RoomPage.jsx
import React, { useContext, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { RoomContext } from "../context/RoomContext";
import AddApplianceForm from "./AddApplianceForm";

const RoomPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { rooms, addAppliance, deleteAppliance } = useContext(RoomContext);
  const [showForm, setShowForm] = useState(false);

  const room = rooms.find((r) => r.id.toString() === id);
  if (!room) return <p>Room not found</p>;

  const ctx = useContext(RoomContext);

  const handleRename = () => {
    if (!ctx || typeof ctx.renameRoom !== 'function') {
      alert("Rename is not available in this build.");
      return;
    }
    const newName = prompt("Enter new room name:", room.name);
    if (newName && newName.trim()) { 
      ctx.renameRoom(room.id, newName.trim());
    }
  };
    const handleQuickAddAppliance = () => { 
    const name = prompt("Device name?");
    const watts = Number(prompt("Watts (e.g., 60)"));
    const hours = Number(prompt("Hours used per day (e.g., 5)"));
    if (!name || Number.isNaN(watts) || Number.isNaN(hours)) return;

    const appliance = {
      id: Date.now(),
      name,
      watts,
      hours,
      getDailyConsumption() {
        return (Number(this.watts) || 0) * (Number(this.hours) || 0);
      },
    };

    addAppliance(room.id, appliance);
  };

  const dailyWh = (room.appliances || []).reduce((sum, a) => { 
    if (a && typeof a.getDailyConsumption === "function") {
      const val = Number(a.getDailyConsumption());
      return sum + (Number.isFinite(val) ? val : 0);
    }
    const w = Number(a?.watts) || 0;
    const h = Number(a?.hours) || 0;
    return sum + w * h;
  }, 0);

  const dailyKWh = dailyWh / 1000; 
  const DAYS = 30;                 
  const RATE = 0.20;               
  const monthlyKWh = dailyKWh * DAYS;       
  const monthlyCost = monthlyKWh * RATE;    


  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col className="d-flex justify-content-between align-items-center">
          <h3>{room.name}</h3>
          <Button variant="secondary" onClick={() => navigate("/")}>
            ❌ Back
          </Button>
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
            <h3> + Add Appliance</h3>
          </Card>
        </Col>
      </Row>

      {/* Custom Appliance Form Modal */}
      <AddApplianceForm
        show={showForm}
        handleClose={() => setShowForm(false)}
        onSave={(appliance) => addAppliance(room.id, appliance)}
      />
    </Container>
  );
};

export default RoomPage;