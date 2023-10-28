import React from "react";
import "./PlaceList.css";
import Card from "../../shared/components/UiElements/Card";
import Placeitem from "./Placeitem";
import Button from "../../shared/components/FormElements/Button";
const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places Found. Create one?</h2>
          <Button to="/places/new">Add a Place</Button>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map((place) => (
        <Placeitem
          key={place.id}
          id={place.id}
          image={place.imgUrl}
          title={place.title}
          description={place.description}
          address={place.address}
          creatorId={place.creator}
          coordinates={place.loaction}
        />
      ))}
    </ul>
  );
};

export default PlaceList;
