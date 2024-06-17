import React from 'react';

const ProfileForm = ({ formData, handleInputChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="profile-content m26">
        <label className='pp'>
          TITLE
        </label>
        <select
          className='ppp'
          name="title"
          value={formData.title}
          onChange={handleInputChange}
          required
        >
          <option value={formData.title}>{formData.title}</option>
          <option value="Mr.">Mr.</option>
          <option value="Mrs.">Mrs.</option>
        </select>
      </div>

      <div className="name">
        <div className="profile-content m12 w50">
          <label className='pp'>
            FIRST NAME
          </label>
          <input
            className='ppp'
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className="profile-content m12">
          <label className='pp'>
            LAST NAME
          </label>
          <input
            className='ppp'
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            required
          />
        </div>
      </div>

      <div className="profile-content m2">
        <label className='pp'>
          EMAIL
        </label>
        <input
          className='ppp'
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="profile-content m12">
        <label className='pp'>
          CURRENT PASSWORD
        </label>
        <input
          className='ppp password'
          type="password"
          name="currentPassword"
          value={formData.currentPassword}
          onChange={handleInputChange}
        />
      </div>
      <div className="profile-content m12 p58">
        <label className='pp'>
          NEW PASSWORD
        </label>
        <input
          className='ppp password'
          type="password"
          name="newPassword"
          value={formData.newPassword}
          onChange={handleInputChange}
        />
      </div>

      <button className='button' type="submit">
        Save Profile
      </button>
    </form>
  );
};

export default ProfileForm;
