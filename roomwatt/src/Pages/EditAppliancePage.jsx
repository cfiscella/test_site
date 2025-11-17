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
  return (
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold">Edit {room.name}</h1>

      {room.appliances.map((appliance) => (
        <div
          key={appliance.id}
          className="flex justify-between items-center border p-4 rounded-lg bg-white"
        >
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">{appliance.name}</h3>

            <div className="flex items-center gap-2">
              <label>Watts:</label>
              <input
                type="number"
                value={appliance.watts}
                onChange={(e) =>
                  handleWattChange(
                    appliance.id,
                    parseInt(e.target.value) || 0
                  )
                }
                className="border rounded p-1 w-24"
              />
            </div>
          </div>

          <DeleteButton onDelete={() => handleDeleteAppliance(appliance.id)} />
        </div>
      ))}

      <div className="pt-6">
        <DeleteButton onDelete={handleDeleteRoom} />
      </div>
    </div>
  );
}