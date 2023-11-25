"use client";
import React, { useState } from "react";
import "./header.css";
import Link from "next/link";
import { useApp } from "@/contexts/contextApi";
import { HelpBox } from "@/app/components/HelpBox";
import { Header } from "../Selected/components";
import HeaderLeftIcon from "@/app/components/HeaderLeftIcon";

const header: React.FC = () => {
  const { user } = useApp();

  if (window.location.pathname === "/login") return null;

  const [showHelpBox, setShowHelpBox] = useState(false);

  return (
    <section className="header-sec">
      <div className="header-container">
        <div className="header-logo-container">
          <HeaderLeftIcon />
        </div>
        {!user ? (
          <div className="header-buttons-container">
            <Link href="/login">
              <button className="header-button-login">ENTRAR</button>
            </Link>
            <button
              onMouseOver={() => {
                setShowHelpBox(true);
              }}
              onMouseLeave={() => {
                setShowHelpBox(false);
              }}
              className="header-button-ajuda"
            >
              ?
            </button>
            {showHelpBox && <HelpBox />}
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <div style={{ color: "#000" }}>
              Bem-vindo <b>{user.name}</b> !
            </div>
            <button
              className="header-button-login"
              onClick={() => {
                localStorage.removeItem("user");
                localStorage.removeItem("userType");
                window.location.href = "/login";
              }}
            >
              Sair
            </button>
            {localStorage.getItem("userType") === "admin" && (
              <button
                className="w-full bg-[#213a5c] hover:bg-[#213a5c]/90 rounded-md text-white font-bold py-2 px-4"
                onClick={() => {
                  window.location.href = "/admin";
                }}
              >
                Painel de Admin
              </button>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default header;
