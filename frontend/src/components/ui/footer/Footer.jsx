import React, { useState } from 'react';
import Logo from "../../../assets/images/LogoWhite.png";
import FooterTool from './FooterTool';
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";
import footerData from '../../../data/footerData';

const Footer = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (item) => {
    setExpandedItem((prevState) => (prevState === item ? null : item));
  };

  const getSpecialsContent = () => {
    switch (expandedItem) {
      case 'customerCare':
        return footerData.customerCare;
      case 'legalArea':
        return footerData.legalArea;
      case 'corporate':
        return footerData.corporate;
      case 'followUs':
        return footerData.followUs;
      default:
        return [];
    }
  };

  const specialsContent = getSpecialsContent();

  return (
    <footer>
      <div className="footer-img-container">
        <img src={Logo} alt="Logo" />
      </div>
      {specialsContent.length === 0 ? (
        <FooterTool />
      ) : (
        <ul className="specials footer-height">
          {specialsContent.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      )}
      <div className="footer-manage-section">
        <ul className="footer-manage">
          <li>SERVICES</li>
          <li>ORDER TRACKING</li>
          <li>RETURNS</li>
          <li className='special' onClick={() => handleToggle('customerCare')}>
            CUSTOMER CARE {expandedItem === 'customerCare' ? <HiOutlineMinus className='plusminus' /> : <HiOutlinePlus className='plusminus' />}
          </li>
          <li className='special' onClick={() => handleToggle('legalArea')}>
            LEGAL AREA {expandedItem === 'legalArea' ? <HiOutlineMinus className='plusminus' /> : <HiOutlinePlus className='plusminus' />}
          </li>
          <li className='special' onClick={() => handleToggle('corporate')}>
            CORPORATE {expandedItem === 'corporate' ? <HiOutlineMinus className='plusminus' /> : <HiOutlinePlus className='plusminus' />}
          </li>
          <li className='special' onClick={() => handleToggle('followUs')}>
            FOLLOW US {expandedItem === 'followUs' ? <HiOutlineMinus className='plusminus' /> : <HiOutlinePlus className='plusminus' />}
          </li>
        </ul>
        <div className="language-section">
          <span>COUNTRY & LANGUAGE</span>
          <div className="language-select">
            <span>Azerbaijan</span>
            <span>/</span>
            <span>English</span>
            <RiArrowDropDownLine className='arrowdown' />
          </div>
        </div>
      </div>
      <div className="copyright">
        <p>Site - managed by The Level S.r.l - Copyright © Dolce & Gabbana S.r.l. 2024 - All rights reserved - any reproduction of the contents is strictly forbidden.</p>
      </div>
    </footer>
  );
};

export default Footer;
