import React, { useState } from 'react';

export default function Mentor(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>{props.firstName}</p>
      <p>{props.lastName}</p>
      <img scr={props.profile}></img>
      <p>{props.description}</p>
    </div>
  );
}