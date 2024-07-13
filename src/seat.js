import React, { useState } from "react";
import "./css/Seat.css";
import { useNavigate } from "react-router-dom";


const Seat = () => {
  const rows = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J'];
  const seatsPerRow = 8; 
  const navigate = useNavigate();


  
  const seats = rows.flatMap(row =>
    Array.from({ length: seatsPerRow }, (_, index) => ({
      id: `${row}${index + 1}`, 
      number: `${row}${index + 1}`,
      booked: (row === 'A' && index === 1) || (row === 'C' && index === 3) || (row === 'E' && index === 5) // Example: Default booked seats
    }))
  );

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seatNumber) => {
    if (!seats.find(seat => seat.number === seatNumber).booked) {
      const updatedSelectedSeats = selectedSeats.includes(seatNumber)
        ? selectedSeats.filter(seat => seat !== seatNumber)
        : [...selectedSeats, seatNumber];
      setSelectedSeats(updatedSelectedSeats);
    }
  };
  const payment= () => {
    navigate('/paymentgateway');
  };

  return (
    <div className="seating-plan">
      <h2>Seat Booking</h2>
      <div className="seats-container">
        {seats.map(seat => (
          <div
            key={seat.id}
            className={`seat ${seat.booked ? 'booked' : ''} ${selectedSeats.includes(seat.number) ? 'selected' : ''}`}
            onClick={() => handleSeatSelect(seat.number)}
          >
            {seat.number}
          </div>
        ))}
      </div>
      <button disabled={selectedSeats.length === 0} onClick={payment}>Book Selected Seats</button>
    </div>
  );
};

export default Seat;
