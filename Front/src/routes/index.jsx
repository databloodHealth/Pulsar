import { Route, Routes } from "react-router-dom";
import Home from "@/pages/Landing/home";
import Sobre from "@/pages/Landing/Sobre";
import Cadastro from "@/pages/Auth/Cadastro";
import Login from "@/pages/Auth/Login";
import DonnorDashboard from "@/pages/System/Dashboard";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/login" element={<Login />} />
      <Route path="/donnorDashboard" element={<DonnorDashboard />} />
    </Routes>
  );
}

export default AppRoutes;