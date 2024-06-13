import React from 'react'

const FooterTool = () => {
  return (
    <div className="footer-tool footer-height">
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
  )
}

export default FooterTool