"use client";

import React, { useEffect } from "react";

const Admin = () => {
  useEffect(() => {
    const verifyUserType = async () => {
      const userType = localStorage.getItem("userType");
      if (userType !== "admin") {
        setTimeout(() => {
          alert("Você não tem permissão para acessar esta página");
          window.location.href = "/";
        }, 2000);
      }
    };
    verifyUserType();
  }, []);

  return (
    <div className="w-screen flex items-center justify-center h-screen bg-black">
      <h1 className="text-white">Página de Admin</h1>
    </div>
  );
};

export default Admin;
