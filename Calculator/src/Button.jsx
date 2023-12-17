import React, { Children } from "react";

export default function Button({ Children,  clickHandler }) {
  return (
    <button  clickHandler= {clickHandler}> 
      {Children}
    </button>
  );
}
