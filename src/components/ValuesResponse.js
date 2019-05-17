import React from "react";

const ValuesResponse = (props) => {
  return (
    <div className={ props.responseClass }>
      <p className="response">{ props.children }</p>
    </div>
  );
}

export default ValuesResponse;
    
