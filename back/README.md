# Backend via Docker

O backend deve ser iniciado pelo Docker Compose na raiz do repositório. O Compose inicia o MySQL e o backend, e publica a API somente no loopback da máquina na porta `3333`.

```powershell
docker compose up --build -d backend
docker compose ps
```

Espere os serviços `db` e `backend` ficarem saudáveis. Teste a API em `http://localhost:3333/health`; a resposta esperada é `{"status":"ok"}`.

No Insomnia, use `http://localhost:3333` como base URL. Por exemplo:

- `POST /api/auth/register`
- `POST /api/auth/login`
- `PATCH /edit/:id` com `Authorization: Bearer <token>`
- `GET /api/admin/doadores` com token de administrador

Para acompanhar o backend ou pará-lo:

```powershell
docker compose logs -f backend
docker compose down
```

O Compose lê as configurações do arquivo `.env` na raiz do repositório. Não inicie o backend com `node app.js` no Windows.

## Conectar ao MySQL pelo Workbench

O MySQL também é publicado somente no loopback do Windows. Crie uma conexão **Standard (TCP/IP)** com:

- Hostname: `127.0.0.1`
- Port: `3307` (ou o valor de `DB_HOST_PORT` no `.env` da raiz)
- Username: o valor de `DB_USER` no `.env`
- Default Schema: o valor de `DB_NAME` no `.env`

Use a senha configurada em `DB_PASSWORD` (ou `DB_ROOT_PASSWORD` se conectar como `root`). O servidor dentro do container é Linux; para recursos de administração do Workbench, configure o perfil do sistema operacional como Linux. O acesso básico por TCP/IP não precisa de SSH nem de gerenciamento remoto.
