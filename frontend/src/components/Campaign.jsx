import React from 'react'
import { Link } from 'react-router-dom'

const Campaign = () => {
  return (
    <section className='section collection-section campaign-section'>
      <h2>NEW DOLCE&GABBANA CASA ADV CAMPAIGN "GREETINGS FROM"</h2>
      <small>Explore Italy's stunning beauty with the new Dolce&Gabbana Casa ADV Campaign. A genuine love letter to the Bel Paese.</small>
      <div className="button-wrapper">
        <button className='button-hero'>
          <Link to="/">
          DISCOVER MORE
          </Link>
        </button>
      </div>
    </section>
  )
}

export default Campaign