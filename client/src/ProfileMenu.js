import React, { useState } from 'react';
import Profile from './Profile';

const ProfileMenu = ({ user }) => {
  // State to manage the open/closed state of the dropdown
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the dropdown state
  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dropdown">
      {/* Button to toggle the dropdown */}
      <button onClick={toggleProfile}>Toggle Profile</button>

      {/* Render the dropdown content if it's open */}
      {isOpen && <Profile user = {user} />}
    </div>
  );
};

export default ProfileMenu;
