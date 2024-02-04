import React from "react";
import { Link } from "react-router-dom";

const Event = ({ item, id }) => {
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <main className="card">
        <img src={item.imgUrl} alt="image" width={330} height={200} />
        <p className="category">{item.category}</p>
        <h1>{item.title}</h1>
        <p>
          <i className="fa-solid fa-calendar-days" style={{color:'red',marginRight:'10px'}}></i>
          {item.date}
        </p>
      </main>
    </Link>
  );
};

export default Event;
