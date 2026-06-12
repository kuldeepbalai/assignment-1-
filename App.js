import React, { useState } from "react";
import "./App.css";

function App() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [bookingId, setBookingId] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const id = "MOV" + Math.floor(Math.random() * 100000);
    setBookingId(id);
  };

  return (
    <div className="container">
      <h1>Movie Ticket Booking</h1>

      {!bookingId ? (
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            onChange={handleChange}
            required
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Enter Mobile Number"
            onChange={handleChange}
            required
          />

          <button type="submit">Book Ticket</button>
        </form>
      ) : (
        <div>
          <h2>Ticket Booked Successfully!</h2>
          <h3>Booking ID: {bookingId}</h3>
          <p>Name: {form.name}</p>
          <p>Email: {form.email}</p>
          <p>Mobile: {form.mobile}</p>
        </div>
      )}
    </div>
  );
}

export default App;
