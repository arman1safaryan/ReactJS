import React from "react"
import franceImage from "../images/france.jpeg";

const France = () => {
  return (
    <div className='container'>
            <h1>France</h1>
            <p>Paris is the capital of France</p>
            <img width="100%" height="100%" src={franceImage} alt="contactUs" />
        </div>
  )
};

export default France;