"use client";

import React from "react";
import { useForm } from "react-hook-form";
import Logo from "@/components/Logo";
import Link from "next/link";
import axios from "axios";


interface FormData {
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData, e: any) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:3001/login", data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      console.log(response);

      if (response.status === 200) {
        localStorage.setItem("user", JSON.stringify(response.data.user));
      }
      window.location.href = "/";
      data.email = "";
      data.password = "";
    } catch (err) {
      alert("Login inválido");
    }
  };

  return (
    <div className="login-page-wrapper">
      <Logo />
      <div className="login-form-wrapper">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <h2>Login</h2>
          <input
            placeholder="Email"
            className="login-form-input"
            type="email"
            {...register("email", {
              required: true,
              pattern: /^\S+@\S+\.\S+$/,
            })}
          />
          {errors.email && (
            <span className="error-message">
              Email é obrigatório e deve ser válido
            </span>
          )}

          <input
            placeholder="Senha"
            className="login-form-input"
            type="password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="error-message">Senha é obrigatória</span>
          )}

          <input
            className="login-form-button login-form-input"
            type="submit"
            value="Entrar"
          />
        </form>
        <span>
          Não tem cadastro? <Link href="/register">Cadastre-se</Link>
        </span>
      </div>
    </div>
  );
};

export default Page;
