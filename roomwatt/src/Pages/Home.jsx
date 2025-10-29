import React from "react";
import Button from 'react-bootstrap/Button';
import AddRoomButton from "../Components/AddRoomButton";

function Home() {
    
    const { rooms, addRoom, deleteRoom } = useContext(RoomContext);
    const navigate = useNavigate();

    const handleAdd = () => {
        const name = prompt("Enter room name:");
        if (name) {
            const id = addRoom(name);
            navigate(`/rooms/${id}`);
        }
    };

    return (
        <>
            <section id="home-page">
                <div className="home-top-row">
                    <AddRoomButton />
                    <Button variant="primary" onClick={handleAdd}>+ Add Room</Button>
                    
                    <div>
                        <div className="blank-home-cards total-watts"></div>
                        <div className="blank-home-cards most-watts"></div>
                    </div>
                </div>

                <div className="mt-4">
                    <h3>Your Rooms</h3>
                    {rooms.length === 0 ? (
                        <p>No rooms added yet. Click "Add Room" to get started!</p>
                    ) : (
                        <ul className="list-group">
                            {rooms.map((room) => (
                                <li 
                                    key={room.id} 
                                    className="list-group-item d-flex justify-content-between align-items-center"
                                    onClick={() => navigate(`/rooms/${room.id}`)}
                                    style={{ cursor: 'pointer' }}
                                >
                                    <span>{room.name}</span>
                                    <Button 
                                        variant="danger" 
                                        size="sm" 
                                        onClick={(e) => {
                                            e.stopPropagation(); // prevent navigating to room page
                                            deleteRoom(room.id);
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </section>
        </>
    )
}

export default Home;