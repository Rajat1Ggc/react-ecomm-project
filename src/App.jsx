import Home from './pages/home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/order" element={<Home />} />
          <Route path="/cart" element={<Home />} />
          <Route path="/dashboard" element={<Home />} />
          {/* when path not match then this path run  */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
