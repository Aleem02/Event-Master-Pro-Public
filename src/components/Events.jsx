import React from "react";
import Event from "./Event";

const Events = () => {
  return (
    <>
      <main className="events">
        <h1>Available Events</h1>
        <div className="search">
          <div>
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search" />
          </div>
          <div>
            <p>Category</p>
          </div>
        </div>
        <div className="event-card">
          <Event />
          <Event />
          <Event />
          <Event />
        </div>
      </main>
    </>
  );
};

export default Events;
