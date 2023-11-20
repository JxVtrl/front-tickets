import React from 'react';
// import Logo from '../components/logo/page'
import Header from '@/app/components/header/page'
import Banner from '@/app/assets/img/pages/home/banner-home.svg'
import Image from 'next/image'
import './home.css'
import Link from 'next/link';

// TELA DE PERFIL

const home: React.FC = () => {
  return (
    <div>
        <Header />
        <section>
            <div className="banner-container">
                <Image src={Banner} 
                alt="Banner principal da home" 
                width={1920}
                height={600}
                priority={true}
                />
            </div>
            <div className='box-select-wrapper'>
                <div className="box-select">
                    <div className='inputs1-compra'>
                        <input className='input-origem' type="text" placeholder='Origem'/>
                        <div className='inputs-ida-volta-container'>
                            <input className='input-ida' type="date" placeholder='Ida'/>
                            <input className='input-volta' type="text"  placeholder='Volta'/>
                        </div>
                    </div>
                    <div className='inputs2-compra'>
                        <input className='input-destino'  type="text" placeholder='Destino'/>
                        <div className='finalizar-busca-container'>
                            <input className='input-passageiros' type="number" placeholder='Passageiros' />
                            <button className='botao-limpar'>limpar busca</button>
                            <button className='botao-buscar'>BUSCAR</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
}

export default home;