import React from 'react';
import style from './style.module.css';

const dadosSemanais = [
  { dia: 'SEG', entradas: 45, saidas: 35 },
  { dia: 'TER', entradas: 75, saidas: 25 },
  { dia: 'QUA', entradas: 18, saidas: 32 },
  { dia: 'QUI', entradas: 125, saidas: 15 },
  { dia: 'SEX', entradas: 60, saidas: 30 },
  { dia: 'SAB', entradas: 8, saidas: 32 },
  { dia: 'DOM', entradas: 4, saidas: 26 },
];

export default function Graphic() {
  return (
    <div className={style.card}>
      <div className={style.header}>
        <h2 className={style.title}>Consumo Semanal</h2>
        
        <div className={style.legend}>
          <div className={style.legendItem}>
            <span className={style.dotEntradas}></span>
            <span className={style.textEntradas}>Entradas</span>
          </div>
          <div className={style.legendItem}>
            <span className={style.dotSaidas}></span>
            <span className={style.textSaidas}>Saídas</span>
          </div>
        </div>
      </div>

      <div className={style.chartContainer}>
        {dadosSemanais.map((item) => (
          <div key={item.dia} className={style.barColumn}>
            <div className={style.barArea}>
                <span className={style.valueBadge}>
                Saídas: {item.saidas}
                <br />
                Entradas: {item.entradas} 
                 </span>
                <div className={style.barWrapper}>
              <div 
                className={style.segmentEntradas} 
                style={{ height: `${item.entradas}px` }} 
              />
              <div 
                className={style.segmentSaidas} 
                style={{ height: `${item.saidas}px` }} 
              />
            </div>
                </div>
            <span className={style.dayLabel}>{item.dia}</span>
          </div>
        ))}
      </div>
    </div>
  );
}