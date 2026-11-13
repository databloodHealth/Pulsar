
# ==========================================
# ETAPA 1 - COMPILAÇÃO DO REACT + VITE
# ==========================================

FROM node:22-alpine AS build

WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm ci

# Copia o restante do projeto
COPY . .

# Gera a versão de produção
RUN npm run build


# ==========================================
# ETAPA 2 - SERVIDOR NGINX
# ==========================================

FROM nginx:alpine

# Remove a configuração padrão
RUN rm /etc/nginx/conf.d/default.conf

# Copia nossa configuração do Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos compilados pelo Vite
COPY --from=build /app/dist /usr/share/nginx/html

# Porta interna do container
EXPOSE 80

# Inicia o Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
