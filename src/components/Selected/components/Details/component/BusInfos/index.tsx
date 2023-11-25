import React from 'react';

const BusInfos: React.FC = () => {
  return <div
          className="
          flex
          flex-col
          justify-between
          gap-2
          h-full
w-full
"
        >
          <h1 className="
          text-2xl
          font-bold
text-right

">Ônibus semi-leito</h1>
          <span
            className="text-right"
          >Poltronas reclináveis</span>
          <span className="text-right">Ar condicionado</span>
          <span className="text-right">Banheiro</span>
        </div>;
}

export default BusInfos;