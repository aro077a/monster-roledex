import React from "react";

import "./CardList.scss";
import Card from "../card/Card";

const CardList = props => {
  console.log("CardList", props);
  return (
    <div className="card-list">
      {props.users.map((user, key) => {
        return <Card key={user.id} user={user} />;
      })}
    </div>
  );
};

export default CardList;
