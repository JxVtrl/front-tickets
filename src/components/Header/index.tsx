"use client";
import React, { useState } from "react";
import "./header.css";
import Link from "next/link";
import { useApp } from "@/contexts/contextApi";
import { HelpBox } from "@/components/HelpBox";
import { usePathname, useRouter } from "next/navigation";
import HeaderLeftIcon from "@/app/components/HeaderLeftIcon";

const Header: React.FC = () => {
  const [showHelpBox, setShowHelpBox] = useState(false);
  const { user, setUser } = useApp();

  const pathname = usePathname();
  const router = useRouter();

  if (pathname === "/login" || pathname === "/register") return null;

  return (
    <section className="header-sec">
      <div className="header-container">
        <Link href="/">
          <div className="header-logo-container">
            <HeaderLeftIcon />
          </div>
        </Link>
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
                setUser(null);
                localStorage.removeItem("user");
                localStorage.removeItem("userType");
              }}
            >
              Sair
            </button>
            {localStorage.getItem("userType") === "admin" && (
              <button
                className="w-full bg-[#213a5c] hover:bg-[#213a5c]/90 rounded-md text-white font-bold py-2 px-4"
                onClick={() => {
                  router.push("/admin");
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

export default Header;
