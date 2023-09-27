import React from "react";
// import {BrowserRouter} from 'react-yydom'
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Users from "./user/pages/Users";
import NewPlace from "./places/pages/NewPlace";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import UserPlaces from "./places/pages/UserPlaces";

function App() {
  return (
    <div className="App">
      <MainNavigation />
      <main>
        <Routes>
          <Route path="/" exact element={<Users/>} />
          <Route path="/:userId/places"  element={<UserPlaces />} />
          <Route path="/places/new" element={<NewPlace />} />
          <Route path="/" element={<Users />} />
          <Route path="/" element={<Users />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
