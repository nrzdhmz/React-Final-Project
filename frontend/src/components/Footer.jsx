import React, { useState } from 'react';
import Logo from "../assets/images/LogoWhite.png";
import FooterTool from './FooterTool';
import { RiArrowDropDownLine } from "react-icons/ri";
import { HiOutlinePlus, HiOutlineMinus } from "react-icons/hi";

const Footer = () => {
  const [expandedItem, setExpandedItem] = useState(null);

  const handleToggle = (item) => {
    setExpandedItem((prevState) => (prevState === item ? null : item));
  };

  const getSpecialsContent = () => {
    switch (expandedItem) {
      case 'customerCare':
        return [
          "Contacts",
          "New Window",
          "Delivery",
          "New Window",
          "Payments",
          "Return and Refund",
          "Need Help?",
          "Site Map",
        ];
      case 'legalArea':
        return [
          "Conditions of Use",
          "Conditions of Sale",
          "Cookie policy",
          "Returns Policy",
          "Privacy Policy",
          "Information Notice on personal data processing",
        ];
      case 'corporate':
        return [
          "Corporate",
          "Career",
          "DG Martini ®",
          "New Window",
          "Sustainability",
          "Click To Send An Email",
          "sustainability@dolcegabbana.com",
          "Whistleblowing",
        ];
      case 'followUs':
        return [
          "Facebook",
          "Twitter",
          "Instagram",
          "Youtube",
          "Pinterest",
          "Linkedin",
          "Weibo",
          "WeChat",
          "Line",
          "Kakao",
        ];
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
