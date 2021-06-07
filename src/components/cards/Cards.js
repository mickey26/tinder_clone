import React, { useEffect, useState } from "react";
import "./Cards.css";
import TinderCard from "react-tinder-card";
import { SwipeableDrawer } from "@material-ui/core";
import axios from "../../axios";



export default function Cards() {
  const [people, setPeople] = useState([
  ]);

 useEffect (()=>{
  async function fetchData(){
    const req = await axios.get('./tinder/cards');
    console.log(req.data);
    setPeople(req.data);
  }
  fetchData();
 },[])

  const Swiped = (direction, nameToDelete) => {
    console.log("removing" + nameToDelete);
  };

  const outOfFrame = (name) => {
    console.log(name + "left the screen");
  };
  return (
    <div className="tinderCards">
      <div className="tinderCards_container">
        {people.map((data) => (
          <TinderCard
            className="swiped"
            key={data.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => Swiped((dir, data.name))}
            onCardLeftScreen={() => outOfFrame(data.name)}
          >
            <div
              style={{ backgroundImage: `url(${data.imgUrl})` }}
              className="card"
            >
              <h3>{data.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}
