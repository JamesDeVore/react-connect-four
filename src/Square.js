import React from 'react';

const Square = ({color}) => { 

  if (!color) { 
    return ( <div className={`col`}></div>)
  }
  return <div className= {`${color} col`}></div>
  
  
}


export default Square;
