import React, { useState } from 'react'


function CDate(){
  const dt = null;
  const [cdate,setDate] = useState(dt); 
  const handelDate = () =>{
    let dt = new Date().toLocaleDateString();
    setDate(dt);
  }

  return(
    <>
      <div>{cdate}</div>
      <button onClick={handelDate}>Get Current date</button>
    </>
  )
}
export default CDate