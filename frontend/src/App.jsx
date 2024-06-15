import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import GenderPage from './pages/GenderPage';
import Header from './components/common_components/Header';
import { AuthProvider } from './context/authContext'; 

const App = () => {
  return ( 
    <Router>
      <AuthProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/women" element={<GenderPage gender="women" />} />
          <Route path="/men" element={<GenderPage gender="men" />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
};

export default App;