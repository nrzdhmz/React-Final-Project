import React from 'react'
import Logo from "../assets/images/LogoWhite.png";


const Footer = () => {
  return (
    <footer>
      <div className="footer-img-container">
        <img src={Logo} alt="Logo" />
      </div>
      <div className="footer-tool">
        <div className="footer-locator">
          <h4>STORE LOCATOR</h4>
          <p>Enter a location to find the nearest DG Stores</p>
          <div className="input-container">
            <input 
            type="text"
            placeholder='Search by city or postcode'
            />
            <button>
              Search
            </button>
          </div>
        </div>
        <div className="footer-locator">
          <h4>SUBSCRIBE TO NEWSLETTER</h4>
          <div className="input-container m32-35">
            <input 
            type="text"
            placeholder='Insert your email'
            />
            <button>
              Confirm
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer