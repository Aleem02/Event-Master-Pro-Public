import React from "react";
import { Link } from "react-router-dom";

const Event = ({ item, id }) => {
  const date = new Date();
  const format = `${date.getFullYear()}-${
    date.getMonth() < 9 ? "0" : null
  }${date.getMonth()+1}-${date.getDate()}`;
  return (
    <Link to={`/${id}`} style={{ textDecoration: "none" }}>
      <main className="card">
        <img src={item.imgUrl} alt="image" width={330} height={200} />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <p
            className="category"
            style={{
              backgroundColor: "lightgray",
              color: "black",
              fontSize: "12px",
              fontWeight: "light",
            }}
          >
            {item.category}
          </p>
          {format > item.date ? (
            <p
              style={{
                marginRight: "10px",
                backgroundColor: "red",
                color: "white",
              }}
            >
              Event Ended
            </p>
          ) : null}
        </div>
        <h1>{item.title}</h1>
        <p>
          <i
            className="fa-solid fa-calendar-days"
            style={{ color: "red", marginRight: "10px" }}
          ></i>
          {item.date}
        </p>
      </main>
    </Link>
  );
};

export default Event;
