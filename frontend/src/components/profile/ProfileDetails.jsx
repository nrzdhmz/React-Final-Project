import React from 'react';
import { Link } from 'react-router-dom';

const ProfileDetails = ({ formData, setEditing }) => {
  return (
    <>
      <div className="profile-content m26">
        <p className='pp'>
          TITLE
        </p>
        <p className="ppp">
          {formData.title}
        </p>
      </div>

      <div className="name">
        <div className="profile-content m12">
          <p className='pp'>
            FIRST NAME
          </p>
          <p className="ppp">
            {formData.firstName}
          </p>
        </div>

        <div className="profile-content m12">
          <p className='pp'>
            LAST NAME
          </p>
          <p className="ppp">
            {formData.lastName}
          </p>
        </div>
      </div>

      <div className="profile-content m2">
        <p className='pp'>
          EMAIL
        </p>
        <p className="ppp">
          {formData.email}
        </p>
      </div>

      <div className="profile-content m12 p58">
        <p className='pp'>
          CURRENT PASSWORD
        </p>
        <p className="ppp">
          ●●●●●●●●●
        </p>
      </div>

      <button className='button' onClick={() => setEditing(true)}>
        <Link>
          Modify Profile
        </Link>
      </button>
    </>
  );
};

export default ProfileDetails;
