import React from "react";

function EventDetails({price, quantity}){
    const totalCost = price * quantity;

    

    return (
        <>

        <div className="row mt-2">
        <p className="fw-bold">
          <i className="fa-solid fa-ticket"></i> Tickets: {quantity} x {price}
        </p>
      </div>
        <div className="row mt-2">
          <p className="fw-bold">
            Purchase Cost: <span className="text-success">${totalCost.toFixed(2)}</span>
          </p>
        </div>
        </>
      );
}

export default EventDetails