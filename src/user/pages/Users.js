import React from "react";
import UsersList from "../components/UsersList";
// import img from "../pages/IMG_20220502_134218.jpg"
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "disha",
      image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Taj_Mahal%2C_Agra%2C_India_edit3.jpg/1024px-Taj_Mahal%2C_Agra%2C_India_edit3.jpg',
      places: 3,
    },
  ];

  return <UsersList items={USERS} />;
};

export default Users;
