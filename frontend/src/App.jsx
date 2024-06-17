import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GenderPage from './pages/GenderPage';
import Header from './components/common_components/Header';
import { AuthProvider } from './context/authContext'; 
import Profile from './pages/Profile';
import Recap from './components/profile/Recap';
import Orders from './components/profile/Orders';
import Wishlist from './components/profile/Wishlist';
import PersonalData from './components/profile/PersonalData';

const App = () => {
  return ( 
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<GenderPage gender="women" />} />
          <Route path="/men" element={<GenderPage gender="men" />} />
          <Route path="/profile/:id/*" element={<Profile />}>
            <Route path="recap" element={<Recap />} />
            <Route path="recap" element={<Recap />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="recap" element={<Recap />} />
          </Route>
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;
