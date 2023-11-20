"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Header from '@/app/components/header/page';
import Banner from '@/app/assets/img/pages/home/banner-home.svg';
import Image from 'next/image';
import './home.css';
import Link from 'next/link';

interface FormValues {
  origem: string;
  destino: string;
  ida: string;
  volta: string;
  passageiros: number;
}

const Home: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormValues>();
  const [formData, setFormData] = useState<FormValues>({ origem: '', destino: '', ida: '', volta: '', passageiros: 0 });

  const onSubmit = (data: FormValues) => {
    console.log(data);
    // Lógica de envio aqui
  };

  // Função para limpar todos os campos
  const limparCampos = () => {
    setFormData({ origem: '', destino: '', ida: '', volta: '', passageiros: 0 });
  };

  return (
    <div>
        <Header />
        <section>
            <div className="banner-container">
                <Image src={Banner} alt="Banner principal da home" width={1920} height={600} priority={true} />
            </div>
            <div className='box-select-wrapper'>
                <form className="box-select" onSubmit={handleSubmit(onSubmit)}>
                    <div className='inputs1-compra'>
                        <input 
                          className='input-origem' 
                          type="text" 
                          placeholder='Origem' 
                          {...register('origem', { required: 'Origem é obrigatória' })}
                          value={formData.origem}
                          onChange={(e) => setFormData({ ...formData, origem: e.target.value })} 
                        />
                        {errors.origem && <span className='error-message-home origin-error'>{errors.origem.message}</span>}

                        <div className='inputs-ida-volta-container'>
                            <input 
                              className='input-ida' 
                              type="date" 
                              placeholder='Ida' 
                              {...register('ida', { required: 'Data de ida é obrigatória' })}
                              value={formData.ida}
                              onChange={(e) => setFormData({ ...formData, ida: e.target.value })} 
                            />
                            {errors.ida && <span className='error-message-home'>{errors.ida.message}</span>}
                            <input 
                              className='input-volta' 
                              type="date" 
                              placeholder='Volta' 
                              {...register('volta')}
                              value={formData.volta}
                              onChange={(e) => setFormData({ ...formData, volta: e.target.value })} 
                            />
                        </div>
                    </div>

                    <div className='inputs2-compra'>
                        <input 
                          className='input-destino' 
                          type="text" 
                          placeholder='Destino' 
                          {...register('destino', { required: 'Destino é obrigatório' })}
                          value={formData.destino}
                          onChange={(e) => setFormData({ ...formData, destino: e.target.value })} 
                        />
                        {errors.destino && <span className='error-message-home destiny-error'>{errors.destino.message}</span>}

                        <div className='finalizar-busca-container'>
                            <input 
                              className='input-passageiros' 
                              type="number" 
                              placeholder='Passageiros' 
                              {...register('passageiros', { 
                                required: 'Número de passageiros é obrigatório', 
                                valueAsNumber: true,
                                validate: value => value > 0 || 'Selecione o número de passageiros'
                              })}
                              value={formData.passageiros}
                              onChange={(e) => setFormData({ ...formData, passageiros: Number(e.target.value) })} 
                            />
                            {errors.passageiros && <span className='error-message-home'>{errors.passageiros.message}</span>}
                            <button type="button" className='botao-limpar' onClick={limparCampos}>Limpar busca</button>
                            <button type="submit" className='botao-buscar'>BUSCAR</button>
                        </div>
                    </div>
                </form>
            </div>
        </section>
    </div>
  );
}

export default Home;
