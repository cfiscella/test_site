// src/context/RoomContext.jsx
import React, { createContext, useState } from "react";

export const RoomContext = createContext();

export const RoomProvider = ({ children }) => {
  const [rooms, setRooms] = useState([]);

  const addRoom = (name) => {
    setRooms([...rooms, { id: Date.now(), name, appliances: [] }]);
  };

  const deleteRoom = (id) => {
    setRooms(rooms.filter((r) => r.id !== id));
  };

  const renameRoom = (id, newName) => {
    setRooms(
      rooms.map((r) => (r.id === id ? { ...r, name: newName } : r))
    );
  };

  const addAppliance = (roomId, appliance) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? { ...room, appliances: [...room.appliances, { id: Date.now(), ...appliance }] }
          : room
      )
    );
  };

  const removeAppliance = (roomId, applianceId) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? { ...room, appliances: room.appliances.filter((a) => a.id !== applianceId) }
          : room
      )
    );
  };

    const calcRoomWatts = (room) => {
    if (!room?.appliances) return 0;
    return room.appliances.reduce(
      (sum, a) => sum + (Number(a.watts) || 0) * (Number(a.hours) || 0),
      0
    );
  };

  return (
    <RoomContext.Provider value={{ 
      rooms, 
      addRoom, 
      deleteRoom, 
      renameRoom,
      addAppliance,
      removeAppliance,
      calcRoomWatts,
    }}
    >
      {children}
    </RoomContext.Provider>
  );
};