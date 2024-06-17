import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import profilepic from "../../assets/images/profilepic.webp";
import { useAuth } from '../../context/authContext';
import axios from 'axios';
import ProfileForm from './ProfileForm';
import ProfileDetails from './ProfileDetails';

const Recap = () => {
  const { user, setUser } = useAuth();
  const { id } = useParams();
  const [editing, setEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: user?.title,
    firstName: user?.firstName,
    lastName: user?.lastName,
    email: user?.email,
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
      setUser(response.data);
      setEditing(false);
    } catch (error) {
      console.error('Error updating profile', error);
    }
  };

  return (
    <section className='profile-section'>
      <div className="editProfile">
        <div className="profile-top m12 p">
          <label className='pp'>Welcome,</label>
          <label className="ppp">{user.firstName}</label>
        </div>

        {editing ? (
          <ProfileForm
            formData={formData}
            handleInputChange={handleInputChange}
            handleSubmit={handleSubmit}
          />
        ) : (
          <ProfileDetails
            formData={formData}
            setEditing={setEditing}
          />
        )}
      </div>
      <div className="pages">
        <div className="wishlistlink">
          <h2><Link to={`/profile/${id}/recap`}>Orders</Link></h2>
          <p>Track your orders and discover when they will arrive.</p>
          <p>You have no order records.</p>
        </div>
        <div className="wishlistlink">
          <h2><Link to={`/profile/${id}/wishlist`}>Wishlist</Link></h2>
          <p>A section with your favorite items saved.</p>
        </div>
        <div className="wishlistlink">
          <h2><Link to={`/profile/${id}/recap`}>Personal Data</Link></h2>
          <p>Check all about your preferences, address, and payment settings.</p>
        </div>
      </div>
      <div className="picture">
        <img src={profilepic} alt="Profile" />
      </div>
    </section>
  );
};

export default Recap;
