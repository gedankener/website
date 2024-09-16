import React from 'react';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input type="checkbox" checked={isOn} onChange={handleToggle} />
        <span className="slider round"></span>
      </label>
      <span className="toggle-label">{isOn ? "Stop the Chaos" : "Back to Chaos"}</span>
    </div>
  );
};

export default ToggleSwitch;