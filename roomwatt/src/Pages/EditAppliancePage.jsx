import React, { useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";
import { RoomContext } from "../RoomContext";

export default function EditRoom() {
    const { state } = useLocation(); // room data passed from RoomList
    const navigate = useNavigate();
  
    const { updateApplianceWatts, deleteAppliance, deleteRoom } =
    useContext(RoomContext);
    
    const room = state;

    const handleWattChange = (applianceId, value) => {
    updateApplianceWatts(room.id, applianceId, value);
  };

  const handleDeleteAppliance = (applianceId) => {
    deleteAppliance(room.id, applianceId);
  };
  const handleDeleteRoom = () => {
    deleteRoom(room.id);
    navigate("/");
  };
  
}