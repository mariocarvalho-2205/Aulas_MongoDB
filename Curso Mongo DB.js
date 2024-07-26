/*
Curso Completo de MongoDB: Do Iniciante ao Avançado
Módulo 1: Introdução ao MongoDB
Aula 1.1: O que é MongoDB?
O que é MongoDB?
MongoDB é um banco de dados NoSQL orientado a documentos que armazena dados em formato JSON.
Diferença entre bancos de dados relacionais e NoSQL
Relacional: Dados armazenados em tabelas com linhas e colunas.
NoSQL: Dados armazenados em documentos flexíveis, sem necessidade de esquema fixo.
Instalação do MongoDB
Passos para instalar MongoDB no Windows, macOS, e Linux.
Ferramentas básicas: MongoDB Compass e MongoDB Shell
MongoDB Compass: Interface gráfica para interagir com MongoDB.
MongoDB Shell: Interface de linha de comando para executar comandos MongoDB.
Aula 1.2: Conceitos Básicos
Databases, Collections, e Documents
Database: Conjunto de coleções.
Collection: Conjunto de documentos.
Document: Unidade básica de dados em MongoDB (semelhante a uma linha em tabelas SQL).
Estrutura de um documento JSON
Exemplos de documentos JSON.
Tipos de dados no MongoDB
String, Number, Date, Array, ObjectId, Boolean, etc.
Módulo 2: Operações CRUD Básicas
Aula 2.1: Criação de Documentos
insertOne
Descrição: Insere um único documento em uma coleção.
Sintaxe:
javascript
Copiar código
db.collection.insertOne({ campo1: "valor1", campo2: "valor2" })
Exemplo Prático:
javascript
Copiar código
db.users.insertOne({ name: "John Doe", age: 30, email: "john.doe@example.com" })
insertMany
Descrição: Insere múltiplos documentos em uma coleção.
Sintaxe:
javascript
Copiar código
db.collection.insertMany([
  { campo1: "valor1", campo2: "valor2" },
  { campo1: "valor3", campo2: "valor4" }
])
Exemplo Prático:
javascript
Copiar código
db.users.insertMany([
  { name: "Jane Doe", age: 28, email: "jane.doe@example.com" },
  { name: "Mike Smith", age: 35, email: "mike.smith@example.com" }
])
Aula 2.2: Leitura de Documentos
find
Descrição: Recupera documentos que correspondem a uma consulta.
Sintaxe:
javascript
Copiar código
db.collection.find(query, projection)
Exemplo Prático:
javascript
Copiar código
db.users.find({ age: { $gt: 25 } })
findOne
Descrição: Recupera um único documento que corresponde a uma consulta.
Sintaxe:
javascript
Copiar código
db.collection.findOne(query)
Exemplo Prático:
javascript
Copiar código
db.users.findOne({ email: "john.doe@example.com" })
Aula 2.3: Atualização de Documentos
updateOne
Descrição: Atualiza um único documento que corresponde a uma consulta.
Sintaxe:
javascript
Copiar código
db.collection.updateOne(filter, update, options)
Exemplo Prático:
javascript
Copiar código
db.users.updateOne(
  { email: "john.doe@example.com" },
  { $set: { age: 31 } }
)
updateMany
Descrição: Atualiza múltiplos documentos que correspondem a uma consulta.
Sintaxe:
javascript
Copiar código
db.collection.updateMany(filter, update, options)
Exemplo Prático:
javascript
Copiar código
db.users.updateMany(
  { age: { $gt: 30 } },
  { $set: { status: "senior" } }
)
Aula 2.4: Exclusão de Documentos
deleteOne
Descrição: Remove um único documento que corresponde a uma consulta.
Sintaxe:
javascript
Copiar código
db.collection.deleteOne(filter)
Exemplo Prático:
javascript
Copiar código
db.users.deleteOne({ email: "john.doe@example.com" })
deleteMany
Descrição: Remove múltiplos documentos que correspondem a uma consulta.
Sintaxe:
javascript
Copiar código
db.collection.deleteMany(filter)
Exemplo Prático:
javascript
Copiar código
db.users.deleteMany({ age: { $lt: 18 } })
Módulo 3: Operadores e Condicionais
Aula 3.1: Operadores de Comparação
$eq (igual)
Descrição: Seleciona documentos onde o valor do campo é igual ao valor especificado.
Exemplo Prático:
javascript
Copiar código
db.users.find({ age: { $eq: 25 } })
$ne (diferente)
Descrição: Seleciona documentos onde o valor do campo é diferente do valor especificado.
Exemplo Prático:
javascript
Copiar código
db.users.find({ age: { $ne: 25 } })
$gt (maior que)
Descrição: Seleciona documentos onde o valor do campo é maior que o valor especificado.
Exemplo Prático:
javascript
Copiar código
db.users.find({ age: { $gt: 25 } })
$gte (maior ou igual a)
Descrição: Seleciona documentos onde o valor do campo é maior ou igual ao valor especificado.
Exemplo Prático:
javascript
Copiar código
db.users.find({ age: { $gte: 25 } })
$lt (menor que)
Descrição: Seleciona documentos onde o valor do campo é menor que o valor especificado.
Exemplo Prático:
javascript
Copiar código
db.users.find({ age: { $lt: 25 } })
$lte (menor ou igual a)
Descrição: Seleciona documentos onde o valor do campo é menor ou igual ao valor especificado.
Exemplo Prático:
javascript
Copiar código
db.users.find({ age: { $lte: 25 } })
Aula 3.2: Operadores Lógicos
$and
Descrição: Junta cláusulas de consulta com um operador lógico AND.
Exemplo Prático:
javascript
Copiar código
db.users.find({ $and: [{ age: { $gt: 25 } }, { status: "active" }] })
$or
Descrição: Junta cláusulas de consulta com um operador lógico OR.
Exemplo Prático:
javascript
Copiar código
db.users.find({ $or: [{ age: { $lt: 18 } }, { age: { $gt: 65 } }] })
$not
Descrição: Inverte o efeito de uma expressão de consulta.
Exemplo Prático:
javascript
Copiar código
db.users.find({ age: { $not: { $gt: 25 } } })
Módulo 4: Validações e Índices
Aula 4.1: Validações
Validação de Esquema
Descrição: Define regras de validação de esquema para garantir a integridade dos dados.
Exemplo Prático:
javascript
Copiar código
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email"],
      properties: {
        name: {
          bsonType: "string",
          description: "O nome é obrigatório e deve ser uma string"
        },
        email: {
          bsonType: "string",
          pattern: "^.+@.+\..+$",
          description: "O email é obrigatório e deve ser um endereço de email válido"
        }
      }
    }
  }
})
Aula 4.2: Índices
Índices Básicos
Descrição: Índices melhoram a performance das consultas.
Sintaxe:
javascript
Copiar código
db.collection.createIndex({ campo: 1 })
Exemplo Prático:
javascript
Copiar código
db.users.createIndex({ email: 1 })
Índices Compostos
Descrição: Índices em múltiplos campos.
Sintaxe:
javascript
Copiar código
db.collection.createIndex({ campo1: 1, campo2: -1 })
Exemplo Prático:
javascript
Copiar código
db.users.createIndex({ lastName: 1, firstName: -1 })
Módulo 5: Funções Avançadas e Agregação
Aula 5.1: Funções de Agregação
Pipeline de Agregação
Descrição: Processa dados em uma coleção e retorna resultados computados.
Exemplo Prático:
javascript
Copiar código
db.orders.aggregate([
  { $match: { status: "completed" } },
  { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } },
  { $sort: { totalAmount: -1 } }
])
$match
Descrição: Filtra documentos para passar apenas os que correspondem aos critérios de consulta.
Exemplo Prático:
javascript
Copiar código
db.orders.aggregate([{ $match: { status: "completed" } }])
$group
Descrição: Agrupa documentos por um campo específico e executa operações de agregação.
Exemplo Prático:
javascript
Copiar código
db.orders.aggregate([
  { $group: { _id: "$customerId", totalAmount: { $sum: "$amount" } } }
])
$sort
Descrição: Ordena os documentos.
Exemplo Prático:
javascript
Copiar código
db.orders.aggregate([{ $sort: { totalAmount: -1 } }])
Aula 5.2: Funções de Map-Reduce
Map-Reduce
Descrição: Processa grandes volumes de dados e gera coleções de resultados resumidos.
Exemplo Prático:
javascript
Copiar código
db.orders.mapReduce(
  function() { emit(this.customerId, this.amount); },
  function(key, values) { return Array.sum(values); },
  { out: "order_totals" }
)
Módulo 6: Administração e Segurança
Aula 6.1: Administração de Banco de Dados
Backup e Restore
Descrição: Ferramentas e comandos para backup e restauração de dados.
Exemplo Prático:
sh
Copiar código
mongodump --db mydb --out /backup/
mongorestore --db mydb /backup/mydb/
Aula 6.2: Segurança
Autenticação e Autorização
Descrição: Configuração de usuários e permissões.
Exemplo Prático:
javascript
Copiar código
db.createUser({
  user: "admin",
  pwd: "password123",
  roles: [ { role: "readWrite", db: "mydb" } ]
})
Conclusão
Revisão Geral
Recapitulação dos principais conceitos e comandos.
Projetos Práticos
Criação de projetos práticos para aplicar os conhecimentos adquiridos.
Recursos Adicionais
Documentação Oficial do MongoDB
Comunidades e Fóruns
Cursos e Tutoriais Online
Este curso oferece uma abordagem completa e detalhada para aprender MongoDB, começando dos conceitos básicos até técnicas avançadas, proporcionando um sólido entendimento e habilidades práticas no uso deste poderoso banco de dados NoSQL.
*/





