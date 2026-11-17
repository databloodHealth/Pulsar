import React from 'react';

const CORES = [
  '#F44336', '#E91E63', '#9C27B0', '#673AB7',
  '#3F51B5', '#2196F3', '#03A9F4', '#00BCD4',
  '#009688', '#4CAF50', '#8BC34A', '#FF9800',
  '#FF5722', '#795548', '#607D8B'
];

// Extrai as iniciais. Se receber o nome completo, usa o primeiro e o último nome.
function extrairIniciais(nome = '', sobrenome = '') {
  const nomeLimpo = nome.trim();
  const sobrenomeLimpo = sobrenome.trim();

  if (!nomeLimpo) return '?';

  if (sobrenomeLimpo) {
    return `${nomeLimpo.charAt(0)}${sobrenomeLimpo.charAt(0)}`.toUpperCase();
  }

  const partes = nomeLimpo.split(/\s+/).filter(Boolean);

  if (partes.length === 1) {
    return partes[0].charAt(0).toUpperCase();
  }

  return `${partes[0].charAt(0)}${partes[partes.length - 1].charAt(0)}`.toUpperCase();
}

// Gera uma cor determinística a partir do texto, mantendo a mesma cor em toda a aplicação.
function gerarCor(texto = '') {
  let hash = 0;
  for (let i = 0; i < texto.length; i++) {
    hash = texto.charCodeAt(i) + ((hash << 5) - hash);
  }
  return CORES[Math.abs(hash) % CORES.length];
}

export default function AvatarComNumero({
  nome = '',
  sobrenome = '',
  numero = '',
  largura = '2.6rem',
  fontSize = '1rem'
}) {
  const iniciais = extrairIniciais(nome, sobrenome);
  const corFundo = gerarCor(`${nome}${sobrenome}${numero || ''}`);
  const titulo = [nome, sobrenome].filter(Boolean).join(' ') || 'Avatar';

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: largura,
        height: largura,
        borderRadius: '50%',
        backgroundColor: corFundo,
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: fontSize,
        userSelect: 'none',
        flexShrink: 0,
        position: 'relative'
      }}
      aria-label={`Avatar de ${titulo}`}
      title={numero ? `${titulo} #${numero}` : titulo}
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
