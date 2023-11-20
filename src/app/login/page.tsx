"use client"

import React from 'react';
import { useForm } from 'react-hook-form';
import Logo from '../components/logo/page';
import Link from 'next/link';

import './login.css';

interface FormData {
  email: string;
  password: string;
}

const Page: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    // Lógica de envio aqui
  };

  return (
    <div className='login-page-wrapper'>
        <Logo />
        <div className='login-form-wrapper'>
          <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
            <h2>Login</h2>
            <input
              placeholder='Email'
              className='login-form-input'
              type="email"
              {...register('email', { required: true, pattern: /^\S+@\S+\.\S+$/ })}
            />
            {errors.email && <span className='error-message'>Email é obrigatório e deve ser válido</span>}
            
            <input
              placeholder='Senha'
              className='login-form-input'
              type="password"
              {...register('password', { required: true })}
            />
            {errors.password && <span className='error-message'>Senha é obrigatória</span>}

            <input
              className='login-form-button login-form-input'
              type="submit"
              value="Entrar"
            />
          </form>
          <span>Não tem cadastro? <Link href="/register">Cadastre-se</Link></span>
        </div>
    </div>
  );
};

export default Page;
