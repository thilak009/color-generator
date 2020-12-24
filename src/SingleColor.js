import React, { useState, useEffect } from 'react'
//import rgbToHex from './utils'

const SingleColor = ({rgb,weight,index,hex}) => {
  const [alert,setAlert]=useState(false);
  const bcg=rgb.join(',');
  const hexValue= `#${hex}`;
  useEffect(()=>{
    const timeout=setTimeout(()=>{
      setAlert(false);
    },3000)
    return ()=> clearTimeout(timeout);
  },[alert]);

  
  return (
    <article className={`color ${index>10 && 'color-light'}`} 
    style={{backgroundColor:`rgb(${bcg})`}}>
      <p className="percent-value">{weight}%</p>
      <p className="color-value">{hexValue}</p>
      <button className="copy-btn" onClick={()=>{
      setAlert(true);
      navigator.clipboard.writeText(hexValue);
    }}>Copy to clipboard</button>
      {
        alert && <p className="alert">copied to clipboard</p>
      }
    </article>
  );
}

export default SingleColor
