import React, { Fragment, useState } from "react";

import Modal from '../Modal/Modal';
import Map from '../Modal/Map';

import "./FoodItem.css";

const FoodItem = ({
  profileImageUrl,
  image,
  title,
  address,
  description,
  user,
  coordinates
}) => {
  const [clicked, setClicked] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const openMapHandler = () => setShowMap(true);
  const closeMapHandler = () => setShowMap(false);

  return (
    <Fragment>

      <Modal
      show={showMap}
      onCancel={closeMapHandler}
      header={address}
      contentClass='place-item__modal-content'
      footerClass='place-item__modal-actions'
      footer={<button onClick={closeMapHandler}>Close</button>}
      >
        <div className="map-container">
              <Map center={coordinates} zoom={16}/>
          </div>
      </Modal>
      <li className="food-item">
        <div className="avatar">
          <img src={profileImageUrl} />
          <h4 className="username">{user}</h4>
        </div>

        <div className="food-item-image">
          <img src={image} />
        </div>
        <div className="food-item-info">
          <h2>{title}</h2>
          <h3>{address}</h3>
          <p>{description}</p>
        </div>
        <div className="food-item-actions">
          <i className="fas fa-search-location"
             onClick={openMapHandler}
          ></i>
          <i
            className={clicked ? "far fa-heart liked" : "far fa-heart"}
            onClick={() => setClicked(!clicked)}
          ></i>
          <i className="fas fa-share"></i>
        </div>
      </li>
    </Fragment>
  );
};

export default FoodItem;
