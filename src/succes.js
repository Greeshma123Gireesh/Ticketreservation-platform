import React from "react";
import { useNavigate } from "react-router-dom";
import './css/succes.css'
const Success = () => {
      const navigate = useNavigate();

  return (
    <div className="success-page">
      <h2>Payment Successful and Ticket Booked!</h2>
      <p>Your tickets have been successfully booked.</p>
      <p>Ticket has been sent to your registered email address.</p>
      <p>Thank you for booking with us!</p>
    </div>
  );
};

export default Success;
