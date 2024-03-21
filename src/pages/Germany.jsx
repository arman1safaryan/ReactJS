import React from "react"
import germanyImage from "../images/germany.jpg";

const Germany = () => {
  return (
    <div className='container'>
            <h1>Germany</h1>
            <p>Frankfurt is one of the famous cities of Germany</p>
            <img width="100%" height="100%" src={germanyImage} alt="contactUs" />
        </div>
  )
};

export default Germany;