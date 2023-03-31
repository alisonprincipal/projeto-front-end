import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { Description } from "../pages/Description";
import { Home } from "../pages/Home";
import { Profile } from "../pages/Profile";
import { Register } from "../pages/Register";

export const RoutesComponents = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/description" element={<Description />} />
      <Route path="/profile" element={<Profile />} />
    </Routes>
  );
};
