import React from "react";
import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "disha",
      image: './IMG_20220502_134218.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
