# 🩸 Pulsar — Sistema de Gerenciamento de Banco de Sangue

> Projeto Integrador 2026 — Fatec Taquaritinga  
> Tecnologias: HTML5 · CSS3 · JavaScript Vanilla
 
## O que é o projeto?
 
O **Pulsar** é uma aplicação web voltada à conscientização sobre doação voluntária de sangue e ao gerenciamento de hemocentros. O sistema atende dois públicos: **doadores voluntários**, que podem se cadastrar, acompanhar suas doações e participar de campanhas; e **funcionários administrativos**, que gerenciam estoque, campanhas e informações dos doadores.
 
A aplicação é construída inteiramente com tecnologias front-end nativas — sem frameworks ou dependências externas — e utiliza `localStorage` para simular a persistência de dados nesta primeira versão.
 
> A doação de sangue é um ato voluntário, anônimo e não remunerado. O Pulsar segue estritamente a Lei nº 10.205/2001 e a RDC nº 153/2004 da ANVISA.
 
---
 
## Objetivo
 
Centralizar e facilitar o controle de doadores, estoque de sangue por tipo sanguíneo, campanhas de doação e atendimento a pacientes com necessidade urgente de transfusão — oferecendo também uma página pública educativa voltada para pessoas que nunca doaram sangue, com informações sobre o processo, cuidados, compatibilidade sanguínea e uma triagem rápida de aptidão sem necessidade de cadastro.
 
---
 
## Estrutura do Projeto
 
```
pulsar/
│
├── index.html                        # Página inicial pública (landing page)
├── login.html                        # Página de login
├── sobre.html                        # Sobre o projeto e a iniciativa
├── favicon.ico
├── README.md
|
├── src/
|   ├── pages/
|      ├── doador/
│          ├── painel.html                   # Dashboard do doador + próximas campanhas
│          ├── historico.html                # Histórico de doações (Coletada / Utilizada)
│          └── notificacoes.html
|      ├── admin/
│          ├── dashboard.html                # Painel administrativo com KPIs
│          ├── doadores.html                 # Lista e gerenciamento de doadores
│          ├── doador-detalhe.html           # Perfil individual + registro de doação
│          ├── estoque.html                  # Estoque por tipo + entrada de bolsas
│          ├── campanhas.html                # Criação e listagem de campanhas
│          ├── pacientes.html                # Pacientes urgentes
│          └── usuarios.html                 # Gerenciamento de perfis e permissões            # Notificações de impacto
|
├── cadastro/
│   ├── step1.html                    # Passo 1 — Dados pessoais
│   ├── step2.html                    # Passo 2 — Triagem de saúde
│   ├── step3.html                    # Passo 3 — Criação de senha
│   └── resultado.html                # Resultado da triagem (apto / inapto)
│
├── triagem-rapida/
│   ├── index.html                    # Formulário público sem necessidade de cadastro
│   └── resultado.html                # Resultado + CTA para campanha e cadastro
│
|
│
|
│
├── assets/
│   ├── styles/
│   │   ├── global.css                # Reset, variáveis CSS, tipografia
│   │   ├── components.css            # Botões, badges, cards, modais, tabelas
│   │   ├── forms.css                 # Estilos de formulários e steps
│   │   ├── landing.css               # Estilos exclusivos da landing page
│   │   ├── doador.css                # Layout da área do doador
│   │   └── admin.css                 # Layout e sidebar do painel admin
│   │
│   └── scripts/
│       ├── auth.js                   # Login, logout e proteção de rotas
│       ├── seed.js                   # Dados iniciais de demonstração
│       ├── storage.js                # Utilitários de leitura e escrita no localStorage
│       ├── triagem.js                # Lógica de aptidão (triagem rápida e cadastro)
│       ├── estoque.js                # Entrada de bolsas e cálculo de vencimento
│       ├── campanhas.js              # Criação e exibição de campanhas
│       ├── doacoes.js                # Registro de doações e atualização de estoque
│       └── notificacoes.js           # Notificação ao doador quando bolsa é utilizada
│
```
 
---
 
## Tecnologias
 
| Tecnologia | Uso |
|---|---|
| HTML5 | Estrutura de todas as páginas |
| CSS3 | Estilização, variáveis, Flexbox e Grid |
| JavaScript ES6+ | Lógica de negócio e manipulação do DOM |
| localStorage | Simulação de persistência de dados |
| Google Fonts | Tipografia |
 
Nenhuma biblioteca ou framework externo foi utilizado. O projeto é intencionalmente construído com tecnologias nativas para demonstrar domínio dos fundamentos do desenvolvimento web.
 
---
 
## 👥 Autores
 
- **Kauã Lima** — Desenvolvimento Full Stack — [@KauaLima678](https://github.com/kaualima678)
- **Gustavo Figueredo** — Desenvolvimento Full Stack — [@GustavoFigueredo](https://github.com/GustavoFigueredo-DEV)
- **Otavio Palese** — Desenvolvimento Full Stack — [@OtavioPalese](https://github.com/OtavioPalese)
- **Estevão Santos** — Desenvolvimento Full Stack  — [@EstevaoSantos7](https://github.com/estevaoSantos7)
---
