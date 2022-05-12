import React from "react";
import "./Switch.css";

const Switch = ({ isOn, handleToggle, id, name }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        id={`react-switch-new${id}`}
        type="checkbox"
        disabled={false}
      />
      <label
        style={{ background: isOn && "#06D6A0" }}
        className="react-switch-label"
        htmlFor={`react-switch-new${id}`}
      >
        <p
          className="switchName"
          style={{
            textDecorationLine: isOn && "underline",
            fontSize: isOn && "25px",
            fontWeight: isOn && "bold",
          }}
        >
          {name}
        </p>
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
