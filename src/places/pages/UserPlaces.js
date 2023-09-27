import React from "react";
import PlaceList from "../components/PlaceList";
import { useParams } from "react-router-dom";

const DUMMYPLACES = [
  {
    id: "p1",
    title: "Empire state",
    description: "tallest in the world ",
    imageUrl:
      "https://images.pexels.com/photos/18424236/pexels-photo-18424236/free-photo-of-wood-light-house-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: " some address",
    location: {
      lat: 18.648061,
      long: 73.7595417,
    },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire state",
    description: "tallest in the world ",
    imageUrl:
      "https://images.pexels.com/photos/18424236/pexels-photo-18424236/free-photo-of-wood-light-house-architecture.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    address: " some address",
    location: {
      lat: 18.648061,
      long: 73.7595417,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
 const userId= useParams().userId;
 const loadedPlaces=DUMMYPLACES.filter(place => place.creator === userId)

  return <PlaceList items={loadedPlaces} />;
};

export default UserPlaces;
