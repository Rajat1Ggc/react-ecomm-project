import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import Home from './pages/home/Home';
import Order from './pages/order/Orders';
import Cart from './pages/cart/cart';
import Dashboard from './pages/admin/dashboard/dashboard';
import NoPage from './pages/nopage/NoPage';
import MyState from './context/data/myState';
import Login from './pages/registration/Login';
import Signup from './pages/registration/Signup';
import ProductInfo from './pages/productInfo/ProductInfo';
import UpdateProduct from './pages/admin/ pages/UpdateProduct';
import AddProduct from './pages/admin/ pages/AddProduct';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/order"
            element={
              <protectedRoute>
                <Order />
              </protectedRoute>
            }
          />
          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <protectedRouteAdmin>
                <Dashboard />
              </protectedRouteAdmin>
            }
          />
          {/* when path not match then this path run  */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route
            path="/addproduct"
            element={
              <protectedRouteAdmin>
                <AddProduct />
              </protectedRouteAdmin>
            }
          />
          <Route path="/updateproduct" element={<UpdateProduct />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
};

export default App;
// user
export const protectedRoute = ({ children }) => {
  const user = localStorage.getItem('user');
  if (user) {
    return children;
  } else {
    return <Navigate to={'/login'} />;
  }
};

// admin

export const protectedRouteAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem('user'));

  if (admin.user.email === 'admin@gmail.com') {
    return children;
  } else {
    return <Navigate to={'./login'} />;
  }
};
