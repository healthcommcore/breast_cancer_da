import React from "react";

const OtherTextField = (props) => {
  return (
    <div className="form-group">
      <label htmlFor="otherTextField">Other</label>
      <input id={ props.id } onChange={ props.onChange } type="text" className="form-control" />
    </div>
  );
}

export default OtherTextField;
