import React from 'react';

// Função para extrair as iniciais e gerar um número/cor com base no nome + sobrenome + número
function gerarAvatarData(nome, sobrenome, numero) {
  const inicialNome = nome ? nome.charAt(0).toUpperCase() : '';
  const inicialSobrenome = sobrenome ? sobrenome.charAt(0).toUpperCase() : '';
  const iniciais = `${inicialNome}${inicialSobrenome}`;

  // Lista de cores de fundo simples
  const cores = [
    '#F44336', '#E91E63', '#9C27B0', '#673AB7',
    '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
    '#009688', '#4CAF50', '#8BC34A', '#FF9800',
    '#FF5722', '#795548', '#607D8B'
  ];

  // Gera um índice determinístico baseado no texto completo + número
  const textoCombinado = `${nome}${sobrenome}${numero || ''}`;
  let hash = 0;
  for (let i = 0; i < textoCombinado.length; i++) {
    hash = textoCombinado.charCodeAt(i) + ((hash << 5) - hash);
  }
  const corIndex = Math.abs(hash) % cores.length;
  const corFundo = cores[corIndex];

  return { iniciais, corFundo };
}

export default function AvatarComNumero({ nome = '', sobrenome = '', numero = '' }) {
  const { iniciais, corFundo } = gerarAvatarData(nome, sobrenome, numero);

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        backgroundColor: corFundo,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: '18px',
        userSelect: 'none',
        position: 'relative'
      }}
      title={`${nome} ${sobrenome} #${numero}`}
    >
      {iniciais}
      {numero && (
        <span
          style={{
            position: 'absolute',
            bottom: '-4px',
            right: '-4px',
            background: '#333',
            color: '#fff',
            fontSize: '10px',
            padding: '2px 4px',
            borderRadius: '50%',
            border: '1px solid #fff'
          }}
        >
          {numero}
        </span>
      )}
    </div>
  );
}
