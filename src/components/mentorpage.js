import React, { useState } from 'react';
import { mentorsRequest } from '../Requests';
import Mentor from './mentor';

export default function MentorPage(props) {
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState([]);

mentorsRequest('/upload/blobstore/mentors/', 'GET', {}, d => {
    setCount(d.data)
})

var mentors = []
var key = 0

count.forEach(c => {
    mentors.push(<Mentor description={c.description} firstName={c.firstName} lastName={c.lastName} profile={c.profile} key={key}></Mentor>)
    key+= 1;
})


  return (
    <div>
     {mentors}


    </div>
  );
}