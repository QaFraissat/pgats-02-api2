# API de Transferências (Node.js + Express)

Esta API permite registro, login, consulta de usuários e transferências de valores, com regras básicas para aprendizado de testes e automação de APIs.

## Funcionalidades
- **Registro de usuário** (`POST /users/register`)
- **Login de usuário** (`POST /users/login`)
- **Consulta de usuários** (`GET /users`)
- **Transferência de valores** (`POST /transfers`)
- **Documentação Swagger** (`GET /api-docs`)

## Regras de Negócio
- Login exige usuário e senha.
- Não é permitido registrar usuários duplicados.
- Transferências para destinatários não favorecidos só podem ser feitas se o valor for menor que R$ 5.000,00.
- Banco de dados em memória (os dados são perdidos ao reiniciar o servidor).

## Instalação
1. Clone o repositório:
   ```sh
   git clone <url-do-repo>
   cd pgats-02-api2
   ```

2. Instale as dependências:
    ```sh
    npm install
    ```

## Configuração
Crie um arquivo `.env` na raiz do projeto (opcional):
```
PORT=3000
```

## Executando a API
- Para rodar o servidor:
   ```sh
   node server.js
   ```
- Acesse a documentação Swagger em: [http://localhost:3000/api-docs](http://localhost:3000/api-docs)

## Estrutura de Diretórios
```
controller/         # Controllers das rotas
service/            # Lógica de negócio
model/              # Modelos e dados em memória
app.js              # Configuração do app Express
server.js           # Inicialização do servidor
swagger.json        # Documentação Swagger
.env                # Variáveis de ambiente
```

## Testes
- O arquivo `app.js` pode ser importado em ferramentas de teste como Supertest, pois não executa o método `listen()`.

---

**Observação:** Esta API é para fins didáticos e não deve ser usada em produção.
