import React, { useState } from 'react';
import profilepic from "../../assets/images/profilepic.webp";
import { useAuth } from '../../context/authContext';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Recap = () => {
  const { user, setUser } = useAuth();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: user?.title || '',
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    email: user?.email || '',
    currentPassword: '',
    newPassword: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put('http://localhost:5000/api/user', formData, { withCredentials: true });
      console.log(response);
      // setUser(response.data);
      setEditing(false); 
    } catch (error) {
      console.log(formData);
      console.error('Error updating profile', error);
    }
  };

  return (
    <section className='profile-section'>
      <div className="editProfile">
        <div className="profile-top m12 p">
          <label className='pp'>
            Welcome,
          </label>
          <label className="ppp">
            {user.firstName}
          </label>
        </div>
        
        {editing ? (
          <form onSubmit={handleSubmit}>
            <div className="profile-content m26">
              <label className='pp'>
                TITLE
              </label>
              <input
                className='ppp'
                type="text"
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                required
              />
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
              <Link>
              Save Profile
              </Link>
            </button>
          </form>
        ) : (
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
        )}
      </div>
      <div className="pages"></div>
      <div className="picture">
        <img src={profilepic} alt="" />
      </div>
    </section>
  );
};

export default Recap;
