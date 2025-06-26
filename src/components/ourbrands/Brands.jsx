import React from 'react';
import './Brands.css';
import RicePacket from './RicePacket';

export default function Brands() {
  return (
    <div className="brands-section text-center">
      <img src="/images/icon-crops.png" alt="Icon" className="icon-img" />
      <h1 className="brands-heading">Brands We Pack</h1>
      <hr className="heading-divider" />
      <h2 className="brand-name">Dream Line</h2>

      <div className="d-flex flex-wrap justify-content-center">
  <div className="d-flex justify-content-center p-2">
    <RicePacket imageSrc="/images/rice.png" packetName="GOLD" />
  </div>
  <div className="d-flex justify-content-center p-2">
    <RicePacket imageSrc="/images/rice.png" packetName="DIAMOND" />
  </div>
  <div className="d-flex justify-content-center p-2">
    <RicePacket imageSrc="/images/rice.png" packetName="PLATINUM" />
  </div>
</div>

    </div>
  );
}
