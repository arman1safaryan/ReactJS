import React from "react"
import spainImage from "../images/spain.jpg";

const Spain = () => {
  return (
    <div className='container'>
            <h1>Spain</h1>
            <p>Barcelona is one of the famous cities of Spain</p>
            <img width="100%" height="100%" src={spainImage} alt="contactUs" />
        </div>
  )
};

export default Spain;