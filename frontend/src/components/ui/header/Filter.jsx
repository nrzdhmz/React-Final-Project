import React from 'react';
import { PiSquaresFourLight } from "react-icons/pi";



const Filter = ({ headerHeight }) => {
  return (
    <div className='filter'>
      <div className="collections active">
        <button>COLLECTIONS</button>
        <button>EDITORIAL</button>
      </div>
      <div className="sort">
        <PiSquaresFourLight />
        <button>FILTERS</button>
      </div>
    </div>
  );
};

export default Filter;
