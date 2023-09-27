import React, { useState } from "react";
import "./PlaceItem.css";
import Card from "../../shared/components/UiElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UiElements/Modal";

const Placeitem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };
  return (
    <>
      <Modal
        show={showMap}
        onCancel={closeMapHandler}
        header={props.address}
        contentClass="place-item__modal-content"
        footerClass="place-item__modal-actions"
        footer={<Button onClick={closeMapHandler}>Close</Button>}
      >
        <div className="map-container">
          <h2>The Map</h2>
        </div>
      </Modal>
      <ul className="place-item">
        <Card className="place-item__content">
          <div className="place-item__image">
            <img src={props.image} alt={props.title} />
          </div>
          <div className="place-item__info">
            <h2>{props.title}</h2>
            <h3>{props.address}</h3>
            <p>{props.description} </p>
          </div>
          <div className="place-item__actions">
            <Button inverse onClick={openMapHandler}> View on Map </Button>
            <Button to={`/places/${props.id}`}> Edit </Button>
            <Button danger> Delete </Button>
          </div>
        </Card>
      </ul>
    </>
  );
};

export default Placeitem;
