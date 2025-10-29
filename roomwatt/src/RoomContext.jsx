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
  
  const addDevice = (roomId, device) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? { ...room, devices: [...room.devices, { id: Date.now(), ...device }] }
          : room
      )
    );
  };

  const removeDevice = (roomId, deviceId) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? { ...room, devices: room.devices.filter((d) => d.id !== deviceId) }
          : room
      )
    );
  };

    const calcRoomWatts = (room) => {
    if (!room?.devices) return 0;
    return room.devices.reduce(
      (sum, d) => sum + (Number(d.watts) || 0) * (Number(d.hours) || 0),
      0
    );
  };

  return (
    <RoomContext.Provider value={{ 
      rooms, 
      addRoom, 
      deleteRoom, 
      renameRoom,
      addDevice,
      removeDevice,
      calcRoomWatts,
    }}
    >
      {children}
    </RoomContext.Provider>
  );
};