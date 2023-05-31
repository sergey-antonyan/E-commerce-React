import "antd/dist/reset.css";
import "../App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MainLayout from "../Components/MainLayout";
import Dashboard from "../AdminPages/Dashboard";
import Users from "../AdminPages/Users";
import ProductList from "../AdminPages/ProductList";
import CategoryList from "../AdminPages/CategoryList";
import AddProduct from "../AdminPages/AddProduct";
import AddCategory from "../AdminPages/AddCategory";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import BuyOnline from "../Pages/BuyOnline";
import Product from "../Pages/Products/Product";
import ProductById from "../Pages/Products/ProductById"
import HomePage from "../Pages/HomePage/HomePage";
import Navbar from "../Components/Navbar";

function AppRoutes() {
  return (
    <>
      <Router>
      <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buyonline" element={<BuyOnline />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products" element={<Product />} />
          <Route path="/products/:id" element={<ProductById />} />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <MainLayout />
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} />
            <Route path="customers" element={<Users />} />
            <Route path="productList" element={<ProductList />} />
            <Route path="categorylist" element={<CategoryList />} />
            <Route path="product" element={<AddProduct />} />
            <Route path="category" element={<AddCategory />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRoutes;
