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
          <RicePacket imageSrc="/images/ourbrands/DLR1.png" packetName="GOLD" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/DLR2.png" packetName="DIAMOND" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/DLR3.png" packetName="PLATINUM" />
        </div>
      </div>

      <h2 className="brand-name mt-4">Naysha</h2>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/NR1.png" packetName="1121 BASMATI RICE" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/NR2.png" packetName="BRONZE" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/NR3.png" packetName="GOLD" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/NR4.png" packetName="DIAMOND" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/NR5.png" packetName="PLATINUM" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/NR6.png" packetName="SILVER" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/NR7.png" packetName="SPECIAL" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/NR8.png" packetName="SUPER MOGRA" />
        </div>
      </div>

      <h2 className="brand-name mt-4">Musafa</h2>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/MR1.png" packetName="PLATINUM" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/MR2.png" packetName="GOLD" />
        </div>
      </div>

      <h2 className="brand-name mt-4">Shree Sidh</h2>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/SSR1.png" packetName="PLATINUM" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/SSR2.png" packetName="TIBAR" />
        </div>
        <div className="d-flex justify-content-center p-2">
          <RicePacket imageSrc="/images/ourbrands/SSR3.png" packetName="GOLD" />
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="justify-content-center p-2">
          <h2 className="brand-name mt-4">Pyare Mohan</h2>
          <RicePacket imageSrc="/images/ourbrands/PRR1.png" packetName="1121 BASMATI RICE" />
        </div>
        <div className="justify-content-center p-2">
          <h2 className="brand-name mt-4">Raja Beta</h2>
          <RicePacket imageSrc="/images/ourbrands/RBR1.png" packetName="1121 BASMATI RICE" />
        </div>
        <div className="justify-content-center p-2">
          <h2 className="brand-name mt-4">Sword</h2>
          <RicePacket imageSrc="/images/ourbrands/SR1.png" packetName="PLATINUM" />
        </div>
      </div>

      <div className="d-flex flex-wrap justify-content-center">
        <div className="justify-content-center p-2">
          <h2 className="brand-name mt-4">White Hilton</h2>
          <RicePacket imageSrc="/images/ourbrands/WHR1.png" packetName="LONG GRAIN" />
        </div>
        <div className="justify-content-center p-2">
          <h2 className="brand-name mt-4">White Hill</h2>
          <RicePacket imageSrc="/images/ourbrands/WH1R1.png" packetName="1121 BASMATI SELLA" />
        </div>
      </div>

    </div>
  );
}
