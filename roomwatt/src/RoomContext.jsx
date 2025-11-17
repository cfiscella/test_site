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
          ? {
              ...room,
              appliances: [
                ...room.appliances,
                { id: Date.now(), ...appliance },
              ],
            }
          : room
      )
    );
  };

  const removeAppliance = (roomId, applianceId) => {
    setRooms(
      rooms.map((room) =>
        room.id === roomId
          ? {
              ...room,
              appliances: room.appliances.filter(
                (a) => a.id !== applianceId
              ),
            }
          : room
      )
    );
  };

  // 🔹 NEW: update fields on a specific appliance (e.g. watts, hours, custom settings)
  const updateAppliance = (roomId, applianceId, updates) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) => {
        if (room.id !== roomId) return room;
        return {
          ...room,
          appliances: room.appliances.map((a) =>
            a.id === applianceId ? { ...a, ...updates } : a
          ),
        };
      })
    );
  };

  // Existing daily watts helper (based on watts * hours)
  const calcRoomWatts = (room) => {
    if (!room?.appliances) return 0;
    return room.appliances.reduce(
      (sum, a) =>
        sum + (Number(a.watts) || 0) * (Number(a.hours) || 0),
      0
    );
  };

  // 🔹 NEW: total monthly kWh for a room
  const calcRoomMonthlyKWh = (room) => {
    if (!room?.appliances) return 0;
    // watts * hours per day * 30 days / 1000
    return room.appliances.reduce((sum, a) => {
      const watts = Number(a.watts) || 0;
      const hours = Number(a.hours) || 0;
      const kWhPerDay = (watts * hours) / 1000;
      return sum + kWhPerDay * 30;
    }, 0);
  };

  // 🔹 NEW: estimated monthly cost given a cost per kWh (default 0.18)
  const calcRoomMonthlyCost = (room, costPerKWh = 0.18) => {
    const kWh = calcRoomMonthlyKWh(room);
    return kWh * costPerKWh;
  };

  return (
    <RoomContext.Provider
      value={{
        rooms,
        addRoom,
        deleteRoom,
        renameRoom,
        addAppliance,
        removeAppliance,
        updateAppliance,       // 👈 new
        calcRoomWatts,
        calcRoomMonthlyKWh,    // 👈 new
        calcRoomMonthlyCost,   // 👈 new
      }}
    >
      {children}
    </RoomContext.Provider>
  );
};
