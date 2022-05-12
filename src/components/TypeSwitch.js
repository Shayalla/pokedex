import React from "react";
import "./TypeSwitch.css";

const TypeSwitch = ({ isOn, handleToggle, id, name, img }) => {
  return (
    <>
      <div className="switchTypesIMGDIV">
        <img className="switchTypesIMG" alt={name} src={img} />
      </div>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="treact-switch-checkbox"
        id={`treact-switch-new${id}`}
        type="checkbox"
        name={name}
      />
      <label
        style={{ background: isOn && "#06D6A0" }}
        className="treact-switch-label"
        htmlFor={`treact-switch-new${id}`}
      >
        <span className={`treact-switch-button`} />
      </label>
    </>
  );
};

export default TypeSwitch;
