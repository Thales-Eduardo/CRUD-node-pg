# [CRUD with driver native node-postgres](https://node-postgres.com/features/connecting)

Para iniciar a aplicação.

> docker-compose up -d

> docker-compose down

Essa api simples e apenas uma introdução, porem esta pronta para escalar caso queira.

# Query

```sql
CREATE TABLE IF NOT EXISTS USERS(
  ID UUID PRIMARY KEY,
  NAME VARCHAR (255) NOT NULL,
  EMAIL VARCHAR (255) NOT NULL,
  DATE TIMESTAMP DEFAULT NOW()
);
```

```js
//Adicionando usuário.
await this.client.query(
  'INSERT INTO USERS (ID, NAME, EMAIL) VALUES ($1, $2, $3)',
  [id, name, email],
);

//Buscar usuário por id.
await this.client.query('SELECT * FROM USERS WHERE ID = $1 LIMIT 1', [idUser]);

//Buscar todos os usuários com paginação e limitando a quantidade no retorno.
await this.client.query('SELECT * FROM USERS LIMIT $1 OFFSET $2', [
  limit,
  offset,
]);

//Atualizar dados do usuário especificado.
await this.client.query(
  'UPDATE USERS SET NAME = $1, EMAIL = $2 WHERE ID = $3',
  [name, email, id],
);

//Deletar usuário específico.
await this.client.query('DELETE FROM USERS WHERE ID = $1', [id]);
```
