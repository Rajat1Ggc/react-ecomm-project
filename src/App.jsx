import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/order';
import Cart from './pages/cart/cart';
import Dashboard from './pages/admin/dashboard/dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Order />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/dashboard" element={<Dashboard />} />
          {/* when path not match then this path run  */}
          <Route path="*" element={<NoPage />} />
        </Routes>
      </Router>
    </MyState>
  );
};

export default App;
