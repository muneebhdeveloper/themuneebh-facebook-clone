import React from "react";
import "./custom-input.styles.css";

function CustomInput({ type, name, handleChange, label, Icon, ...otherProps }) {
  return (
    <div className="custom-form-group">
      {label ? <label>{label}</label> : null}
      {Icon ? <Icon className="input-icon" /> : null}
      <input type={type} name={name} onChange={handleChange} {...otherProps} />
    </div>
  );
}

export default CustomInput;
