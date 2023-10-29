import React, { useContext, useState } from "react";
import "./PlaceItem.css";
import Card from "../../shared/components/UiElements/Card";
import Button from "../../shared/components/FormElements/Button";
import Modal from "../../shared/components/UiElements/Modal";
import { AuthContext } from "../../shared/context/auth-context";

const Placeitem = (props) => {
  const [showMap, setShowMap] = useState(false);

  const [showConf, setShowConf] = useState(false);

  const openMapHandler = () => {
    setShowMap(true);
  };
  const closeMapHandler = () => {
    setShowMap(false);
  };

  const showDeleteWarningHandler = () => {
    setShowConf(true);
  };
  const cancelDeleteWarningHandler = () => {
    setShowConf(false);
  };

  const confirmDeleteHandler = () => {
    setShowConf(false);
    console.log("DELETING...");
  };

  const auth = useContext(AuthContext);
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
      <Modal
        show={showConf}
        onCancel={cancelDeleteWarningHandler}
        header="Are you sure?"
        footerClass="place-item__modal-actions"
        footer={
          <>
            <Button inverse onClick={cancelDeleteWarningHandler}>
              {" "}
              Cancel
            </Button>
            <Button danger onClick={confirmDeleteHandler}>
              Confirm
            </Button>
          </>
        }
      >
        <p>Are you Sure? Cannot br undone.</p>
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
            <Button inverse onClick={openMapHandler}>
              {" "}
              View on Map{" "}
            </Button>
            {auth.isLoggedIn && (
              <Button to={`/places/${props.id}`}> Edit </Button>
            )}

            {auth.isLoggedIn && (
              <Button danger onClick={showDeleteWarningHandler}>
                {" "}
                Delete{" "}
              </Button>
            )}
          </div>
        </Card>
      </ul>
    </>
  );
};

export default Placeitem;
