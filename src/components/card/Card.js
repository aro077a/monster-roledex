import React from "react";
import "./Card.scss";

const Card = props => {
  console.log("Card", props);
  return (
    <div className="card-container">
      <img
        src={`https://robohash.org/${props.user.id}?set=set2&size=240x240`}
        alt="user"
      />
      <h2>{props.user.name}</h2>
      <p>{props.user.email}</p>
    </div>
  );
};

export default Card;
