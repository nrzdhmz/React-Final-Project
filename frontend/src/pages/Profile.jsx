import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/common_components/Footer';

const Profile = () => {
  return (
    <main>
      <Outlet />
      <Footer />
    </main>
  );
};

export default Profile;
