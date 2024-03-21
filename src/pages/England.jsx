import React from "react"
import englandImage from "../images/england.jpg";

const England = () => {
  return (
    <div className='container'>
            <h1>England</h1>
            <p>London is the capital of England</p>
            <img width="100%" height="100%" src={englandImage} alt="contactUs" />
        </div>
  )
};

export default England;