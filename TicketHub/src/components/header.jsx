import React from "react";
import { useState } from "react";

function Header({concertName, likes, onLike}){

    const renderConcertBlurb = () => {
        switch (concertName) {
          case "Electronic Dance Party":
            return {
              backgroundImage: `url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundPosition: "center -300px",
              backgroundSize: "cover",
            };
          case "Rock 'n Roll Revival":
            return {
              backgroundImage: `url(https://images.unsplash.com/photo-1507874457470-272b3c8d8ee2?crop=entropy&cs=tinysrgb&fit=crop&h=500&w=1500)`,
              backgroundPosition: "center ",
              backgroundSize: "cover",
            };
          case "Indie Under the Stars":
            return {
              backgroundImage: `url(https://plus.unsplash.com/premium_photo-1719467541072-7b53ae7e93c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)`,
              backgroundPosition: "center",
              backgroundSize: "cover",
            };
        }
    }


    return(
        <> 
        <div className="container backgroundContainer">
            <div className="jumbotron jumbotron-image shadow d-flex flex-column justify-content-between" style={renderConcertBlurb()}>

            <div className="row concerntName">
                <h1 className="m-3 concertName2">{concertName}</h1>
                </div>

            <div className="row align-items-end likes ms-2 mb-2">
                <div className="col p-3">
                <button className="btn btn-primary heart2" onClick={onLike}><i className="fa-solid fa-heart"></i>{likes}</button>
                </div>

            </div>
            </div>
        </div>
        </>
    )
}

export default Header