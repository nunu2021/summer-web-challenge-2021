import React, { useState } from 'react';
import '../style/style.css'

export default function Mentor(props) {

  return (
    <div className='mentor-block'>
     
    <div>
    <div className='mentor-image' style= {{ backgroundImage: `url(${props.profile})`}} ></div> <br/>
      <p className='mentor-name'>{props.firstName} {props.lastName}</p> 
    </div>
  
      <p className='mentor-description'>{props.description}</p>
    </div>
  );
}