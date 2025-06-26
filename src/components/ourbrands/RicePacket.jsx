import React from 'react';
import './RicePacket.css'; // Custom CSS

const RicePacket = ({ imageSrc, packetName }) => {
  return (
    <div className="rice-card text-center">
      <img src={imageSrc} alt={packetName} className="packet-img" />
      <div className="packet-label">{packetName}</div>
    </div>
  );
};

export default RicePacket;
