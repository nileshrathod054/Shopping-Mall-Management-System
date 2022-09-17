import React from "react";
import "./Home.css";
import Shopping from "./Images/shopping.jpg";

const Home = () => {
  return (
    <div className="home">
      <h1 className="index"><u>Welcome to our site</u></h1>
      <div>
        <img src={Shopping}  alt=" " />
      </div>
    </div>
  );
};

export default Home;
