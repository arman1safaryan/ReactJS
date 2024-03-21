import React from "react"
import italyImage from "../images/italy.jpg";

const Italy = () => {
  return (
    <div className='container'>
            <h1>Italy</h1>
            <p>Milan is one of the famous cities of Italy</p>
            <img width="100%" height="100%" src={italyImage} alt="contactUs" />
        </div>
  )
};

export default Italy;
