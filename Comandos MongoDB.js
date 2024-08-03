/*
// Comandos Mongo
? show - exibe os bancos existentes
* show dbs - mostra os bancos de dados

* use nome_do_banco - seleciona o banco de dados
? insertOne - Inserir dados
* db.nome_collection.insertOne({chave: "valor"}) - insere um documento e cria collection

mudando o id
* db.<collection>.insertOne({_id: 1001, produto: "Vassoura"}) //// dessa forma podemos implementar o id de acordo com a necessidade

* insertMany([{chave: "valor"}, {chave: "valor"}]) - insere varios dados ao mesmo tempo

? Metodo insert pode ser usado nas aplicações mais antigas, porem pode ser descontinuado
unico dado
* db.<colection>.insert({chave: "valor", chave: "valor"})
multiplos dados
* db.<collection>.insert([{chave: "valor", chave: "valor"}, {chave: "valor"}])
! Metodo Write Concern - para configurar o insertMany
com essa configuração determinamos um tempo para a inserção de dados
* db.<collection>.insertMany([{chave: "valor"}, {chave: "valor"}], { w: "majority", wtimeout: 100})

// find
? find - Buscar dados
* db.nome_collection.find() - retorna todos os dados da coleção
* db.nome_colection.findOne() - retorna o primeiro dado da coleção
* db.nome_collection.find({chave: "valor"}) - retorna o dado especifico  //! OBS: a chave e o valor precisa estar exatamente como foram criados
? find({chave: valor}) - Retorna dado especifico de acordo com o valor da chave e valor
* db.<collection>.find({chave: 'valor'})

// Operadores
? Operador in - utilizado para pesquisar mais de uma opção // or
* db.<collection>.find({chave: {$in: ["valor_1", "valor_2"]}}) //// retorna valores que tenham um dos dois dados
? Operador e - equivalente ao &&
* db.<collection>.find({chave: valor, chave: valor}) //// retorna valores que atendam as duas condiçoes
! OBS: Operadore maior que e menor que não podem ser usados na mesma consulta
? Operador $gt - equivalente a maior que
* db.books.find({pageCount: {$gt: 800}, _id: {$gt: 242}})
? Operador $lt - equivalente a menor que
* db.<collection>.find({pageCount: {$lt: 20}})
? Operador $or - equivalente ao || ou - utilizado para pesquisa em campos diferentes
* db.<collection>.find({$or: [{chave: valor}, {chave: valor}]})
? Operador $and e $or - equivalente ao && e ||
* db.<collection>.find({$and: [{chave: valor}, {chave: valor}]})
? Operador $and e $or na mesma consulta
* db.<collection>.find({$or: [{chave: valor}, {chave: valor}], $and: [{chave: valor}, {chave: valor}]})
? Operador $push - atualiza um item de um array 

? count - exibe a quantidade de registros com a caracteristica passada
db.<collection>.find({ pageCount: { $gt: 500} }).count()


? pretty - retorna os dados com um melhor formato
* ex: db.nome_collection.insertOne({nome: "joao", idade: 35, hobbies: ["Programar", "Jogar", "Correr", "Ler"], profissao: "Programador", salario: 300000, esta_trabalhando: true})
* db.collection.find({}).pretty() - organiza os dados exibidos
* metod it e uma forma de retornar menos dados

//// Atualizar dados - updateOne
? updateOne()
// Operador $set:
* primeiro parametro e o filtro, segundo parametro dado que sera atualizado
* db.collection.updateOne({chave: valor}, {$set: {chave: valor}})
Ex: db.books.updateOne({_id: 314}, {$set: {pageCount: 1000}})
Atividaade:
    db.books.updateOne({_id: 20}, {$set: {title: "Meu Primeiro UPDADE"}})

? updateMany() - atualiza muitos dados ao mesmo tempo
* db.collection.updateMany({chave: "valor"}, {$set: {chave: "valor"}})
? replaceOne() - Substitui os dados por outro dado
* Ex: Será substituido os dados de uma pasta completamente
* Sintase: db.<collection>.replaceOne({chave: "valor"}, {chave: "valor"})
//// Atualizar todos os dados 
? updateMany() - atualiza todos os dados do banco
* db.<collection>.updateMany({}, {$set: {chave: "Valor"}})

//// Delete / destroy - deletando dados
? deleteOne()
* db.<collection>.deleteOne({chave: "valor"})
? deleteMany()
* db.<collection>.deleteMany({chave: "valor"})
? deleteMany({}) - deletando todos os dados de uma collection
! MUITO CUIDADO COM FILTROS VAZIO EM DELETE

? createCollection - Criando collection implicita
? essa função criaa uma collectio com campos especificos
? sintaxe: 
    * capped - informa que sera ativo a função
    * size - o tamanho em bytes
    * max - quantidade de registros
    * db.createCollection("nome da colecao", { capped: true, size: 1000, max: 3 }) //! caso alcance o numero maximo de registros ira substituir os primeiros
        ! Essa forma usa o conceito de Fila - sai o mais aintigo e entra o mais novo
    * db.createCollection("nome da coleção") - cria a coleção simples

? show collections - exibe todas as coleções no banco de dados

? drop - remove collection  // ! Esse comando tambem remove os dados que estiverem na collection
* db.nome_collectio.drop()

? dropDatabase() - Apaga o banco de dados e todas as suas collections
* db.dropDatabase()

? mongoimport - importa database json
* é preciso estar na pasta do projeto
* comando -d = database / -c = collection 
* mongoimport nome_do_arquivo -d nome_d0_banco -c nome_da_collection

? mongoexport - exporta database json
* comando -c collection / -d database / -o nome_arquivo.json
* mongoexport -c nome_collection -d nome_do_banco -o nome_do_novo_arquivo

? mongodump - para exportar muitas collections
* mongodump -d <banco> -o <diretorio> // no diretorio serao criadas as pastas com as collections

? mongorestore - importa o diretorio mantendo a mesma estrutura de pastas
* mongorestore -d <banco> 

? mongostat - checa informações como quantidade de consultas, consumo de redes
? e outros dados
* mongostat

? remover varios bancos ao  mesmo tempo preservando os bancos admim config e local
* Mongo().getDBNames().forEach(function(db) {
    if (['admin', 'config', 'local'].indexOf(db)<0) {
        Mongo().getDB(db).dropDatabase();
    }
});

Atividade 02:
db.books.find({ categories: "Java"})
db.books.find({ pageCount: { $lt: 100}})
db.books.find({ $and: [{ categories: "Microsoft"}, { pageCount: {$gt: 300}}]})
db.books.find({ categories: "Web Development"}).count()
db.books.find({ $or: [{ authors: "Bret Updegraff"}, { categories: "Mobile"}]})

atividade 03:
db.books.find({title: "Flex 4 in Action"})
db.books.updateMany({title: "Flex 4 in Action"}, {$set: {status: "OUT OF STOCK"}})
db.books.updateMany({pageCount: {$lt: 100}}, {$set: {short_book: true}})
db.books.find({$and: [{categories: "Java"},{pageCount: {$gt: 500}}]})
db.books.updateMany({$and: [{categories: "Java"},{pageCount: {$gt: 500}}]}, {$push: {categories: "Many Pages"}})


*/



