import React from "react";
import { useState } from 'react';
import EventDetails from "./EventDetails";

function Form({concertIdIn, ticketPrice}) {

    const [formData, setFormData] = useState({
        concertId: concertIdIn,
        email: '',
        name: '',
        phone: '',
        quantity: '',
        creditCard: '',
        expiration: '',
        securityCode: '',
        address: '',
        city: '',
        province: '',
        postalCode: '',
        country: '',
      });

      // These fake concert desctiptions were 100% AI generated
      const renderConcertBlurb = () => {
        switch (concertIdIn) {
          case 9090:
            return (
              <div className="alert alert-dark mt-4">
                <h5>🔥 Rock 'n Roll Revival</h5>
                <p>
                  Get ready to bang your head and throw up the horns! Join us Saturday night at
                  <strong> The Cavern Club, Halifax</strong> — doors open at 7 PM. It's loud, it's raw, it's unforgettable.
                </p>
              </div>
            );
          case 7777:
            return (
              <div className="alert alert-secondary mt-4">
                <h5>🎸 Indie Under the Stars</h5>
                <p>
                  Discover new sounds and dreamy vibes at this open-air indie showcase. Join us at
                  <strong> Commons Park, Halifax</strong> — Sunday at 6 PM. Bring a blanket and your chillest vibes.
                </p>
              </div>
            );
          case 4545:
            return (
              <div className="alert alert-info mt-4">
                <h5>🎧 Electronic Dance Party</h5>
                <p>
                  Pulse-pounding beats and hypnotic lights await you! Live DJs all night at
                  <strong> The Warehouse, Halifax</strong> — Friday at 9 PM. Come dance like nobody’s watching.
                </p>
              </div>
            );
          default:
            return null;
        }
      };
      
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // You can add more advanced validation or post request here
        console.log('Submitted:', formData);
      };
    
    return(
    <>
    <div className="row mt-4">
      <h2 className="mb-4">Ticket Purchase Form</h2>
      <div className="col-8">
      <form onSubmit={handleSubmit} noValidate>
        <div className="mb-3">
          <label className="form-label">Concert ID</label>
          <input
            type="number"
            className="form-control"
            name="concertId"
            required
            value={formData.concertId}
            readOnly
            />
        </div>

        <div className="row g-3">
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-3 mb-3">
          <label className="form-label">Phone</label>
          <input
            type="tel"
            className="form-control"
            name="phone"
            pattern="\d{3}-\d{3}-\d{4}"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="123-456-7890"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Quantity (1–24)</label>
          <input
            type="number"
            className="form-control"
            name="quantity"
            required
            min={1}
            max={24}
            value={formData.quantity}
            onChange={handleChange}
          />
        </div>

        <div className="row g-3">
          <div className="col-md-8">
            <label className="form-label">Credit Card</label>
            <input
              type="text"
              className="form-control"
              name="creditCard"
              required
              pattern="\d{13,19}"
              value={formData.creditCard}
              onChange={handleChange}
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">Exp. (MM/YY)</label>
            <input
              type="text"
              className="form-control"
              name="expiration"
              required
              pattern="^(0[1-9]|1[0-2])\/?([0-9]{2})$"
              value={formData.expiration}
              onChange={handleChange}
              placeholder="MM/YY"
            />
          </div>

          <div className="col-md-2">
            <label className="form-label">CVV</label>
            <input
              type="text"
              className="form-control"
              name="securityCode"
              required
              pattern="^\d{3,4}$"
              value={formData.securityCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-3 mb-3">
          <label className="form-label">Address</label>
          <input
            type="text"
            className="form-control"
            name="address"
            required
            value={formData.address}
            onChange={handleChange}
          />
        </div>

        <div className="row g-3">
          <div className="col-md-4">
            <label className="form-label">City</label>
            <input
              type="text"
              className="form-control"
              name="city"
              required
              value={formData.city}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Province</label>
            <input
              type="text"
              className="form-control"
              name="province"
              required
              value={formData.province}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Postal Code</label>
            <input
              type="text"
              className="form-control"
              name="postalCode"
              required
              pattern="(^[A-Za-z]\d[A-Za-z][ -]?\d[A-Za-z]\d$)|(^\d{5}(-\d{4})?$)"
              value={formData.postalCode}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="mt-3 mb-3">
          <label className="form-label">Country</label>
          <input
            type="text"
            className="form-control"
            name="country"
            required
            value={formData.country}
            onChange={handleChange}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Complete Purchase
        </button>
      </form>
      </div>
      <div className="col-3">
      {renderConcertBlurb()}
        <EventDetails price={ticketPrice} quantity={parseInt(formData.quantity || 0)}/>
      </div>
    </div>

    </>
    )
}

export default Form