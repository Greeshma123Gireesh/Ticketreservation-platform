import React, { useState } from "react";
import './css/paymentgateway.css'; // Import CSS file for styling
import { useNavigate } from "react-router-dom";

const PaymentGateway = () => {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [name, setName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [processing, setProcessing] = useState(false);
  const [paymentError, setPaymentError] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);

  const navigate = useNavigate();

  const handleCardSubmit = (event) => {
    event.preventDefault();
    setPaymentError(null);
    setProcessing(true);

    
    setTimeout(() => {
      
      setPaymentStatus("Payment successful! Your tickets have been booked.");
      setProcessing(false);
      navigate('/succes'); 
    }, 2000); 
  };

  const handleUpiSubmit = (event) => {
    event.preventDefault();
    setPaymentError(null);
    setProcessing(true);

    // Simulate UPI payment processing
    setTimeout(() => {
      // Simulate success
      setPaymentStatus("Payment successful! Your tickets have been booked.");
      setProcessing(false);
      navigate('/succes'); // Navigate to success page
    }, 2000); // Simulate delay of 2 seconds
  };

  return (
    <div className="payment-gateway">
      <h2>Payment Gateway</h2>

      <div className="payment-method">
        <button onClick={() => setPaymentMethod("card")} className={paymentMethod === "card" ? "active" : ""}>Card Payment</button>
        <button onClick={() => setPaymentMethod("upi")} className={paymentMethod === "upi" ? "active" : ""}>UPI Payment</button>
      </div>

      {paymentMethod === "card" && (
        <form onSubmit={handleCardSubmit}>
          <label>
            Card Number
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
            />
          </label>
          <label>
            Expiry Date
            <input
              type="text"
              value={expiry}
              onChange={(e) => setExpiry(e.target.value)}
              required
            />
          </label>
          <label>
            CVV
            <input
              type="text"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              required
            />
          </label>
          <label>
            Cardholder Name
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </label>
          {paymentError && <div className="error">{paymentError}</div>}
          {paymentStatus && <div className="success">{paymentStatus}</div>}
          <button type="submit" disabled={processing}>
            {processing ? "Processing..." : "Pay Now with Card"}
          </button>
        </form>
      )}

      {paymentMethod === "upi" && (
        <form onSubmit={handleUpiSubmit}>
          <label>
            UPI ID
            <input
              type="text"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              required
            />
          </label>
          {paymentError && <div className="error">{paymentError}</div>}
          {paymentStatus && <div className="success">{paymentStatus}</div>}
          <button type="submit" disabled={processing}>
            {processing ? "Processing..." : "Pay Now with UPI"}
          </button>
        </form>
      )}
    </div>
  );
};

export default PaymentGateway;
