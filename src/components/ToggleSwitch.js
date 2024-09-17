import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ToggleSwitch = ({ isOn, handleToggle }) => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname !== '/' && isOn) {
      handleToggle();
    }
  }, [location.pathname, isOn, handleToggle]);

  const handleChange = () => {
    if (!isOn || location.pathname === '/') {
      handleToggle();
      if (!isOn) navigate('/');
    }
  };

  return (
    <div className="toggle-switch-container">
      <label className="toggle-switch">
        <input 
          type="checkbox" 
          checked={isOn && location.pathname === '/'} 
          onChange={handleChange} 
        />
        <span className="slider round"></span>
      </label>
      <span className="toggle-label">
        {location.pathname === '/' ? (isOn ? "Stop the Chaos" : "Back to Chaos") : "Back to Chaos"}
      </span>
    </div>
  );
};

export default ToggleSwitch;