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

  return (
    <RoomContext.Provider value={{ rooms, addRoom, deleteRoom, renameRoom }}>
      {children}
    </RoomContext.Provider>
  );
};