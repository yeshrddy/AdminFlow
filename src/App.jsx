import React, { useState } from "react";
import Header from "./components/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeaderMobile from "./components/HeaderMobile";
import CategoryPills from "./components/CategoryPills";
import { categories } from "./utils/constants";
import AdminDashboard from "./components/Pages/AdminDashboard";
import PersonalInformation from "./components/Pages/PersonalInformation";
import ManageAddress from "./components/Pages/ManageAddress";
import PaymentCardInformation from "./components/Pages/PaymentCardInformation";
import Orders from "./components/Pages/Orders";
import Wishlist from "./components/Pages/Wishlist";
import Reviews from "./components/Pages/Reviews";
import Saved from "./components/Pages/Saved";
import Notification from "./components/Pages/Notification";
import Home from "./components/Pages/Home";

const App = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <Router>
      <div className="bg-slate-100 ">
        <Header />
        <HeaderMobile />
        <CategoryPills
          categories={categories}
          selectedCategory={selectedCategory}
          onSelect={setSelectedCategory}
        />
        <Routes>
          <Route path="/" element={<AdminDashboard />}>
            <Route path="/" element={<Home />} />
            <Route path="/information" element={<PersonalInformation />} />
            <Route path="/addresses" element={<ManageAddress />} />
            <Route path="/payment" element={<PaymentCardInformation />} />
            <Route path="/notifications" element={<Notification />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/saved" element={<Saved />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
};

export default App;
