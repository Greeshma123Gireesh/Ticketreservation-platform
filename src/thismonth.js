import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

const Thismonth = () => {
  const [events, setEvents] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:80/TICKETAPI/thismonth.php')
      .then(response => {
        console.log('API response:', response.data); 
        if (Array.isArray(response.data)) {
          setEvents(response.data);
        } else {
          console.error('Received unexpected data format:', response.data);
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleBookNow = () => {
    navigate('/seat');
  };

  return (
    <div>
<div className='heading'>
      <h1>This Month</h1>
      </div>      <div className='row'>
        {events.map(event => (
          <div className="col-4 mb-4" key={event.id}>
            <div className="card">
              <img src={`data:image/jpeg;base64,${event.image}`} className="card-img-top img-fluid" alt={event.title} style={{ height: '200px', objectFit: 'cover' }} />
              <div className="card-body">
                <h5 className="card-title">{event.title}</h5>
                <p className="card-text">
                  <FontAwesomeIcon icon={faCalendarDays} /> {event.date} | {event.time}
                </p>
                <p className="card-text">
                  <FontAwesomeIcon icon={faLocationDot} /> {event.location}
                </p>
                <div className="button">
                  <a href="#" className="btn btn-primary">₹{event.price}</a>
                  <button onClick={handleBookNow} className="btn btn-primary">Book Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Thismonth;
