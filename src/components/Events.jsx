import React from "react";
import Event from "./Event";

const Events = ({dbData}) => {
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
          {dbData.map((item)=>(
            <Event key={item.id} item={item} id={item.id}/>
          ))}
        </div>
      </main>
    </>
  );
};

export default Events;
