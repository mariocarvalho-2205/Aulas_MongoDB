/*
// Comandos Mongo
? show - exibe os bancos existentes
* show dbs - mostra os bancos de dados

* use nome_do_banco - seleciona o banco de dados
? insertOne - Inserir dados
* db.nome_collection.insertOne({chave: "valor"}) - insere um documento e cria collection

? find - Buscar dados
* db.nome_collection.find() - retorna todos os dados da coleção
* db.nome_colection.findOne() - retorna o primeiro dado da coleção
* db.nome_collection.find({chave: "valor"}) - retorna o dado especifico  //! OBS: a chave e o valor precisa estar exatamente como foram criados
* 
? pretty - retorna os dados com um melhor formato
* ex: db.nome_collection.insertOne({nome: "joao", idade: 35, hobbies: ["Programar", "Jogar", "Correr", "Ler"], profissao: "Programador", salario: 300000, esta_trabalhando: true})
* db.collection.find({}).pretty() - organiza os dados exibidos

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
* comando -d = database / -c = collection 
* mongoimport nome_do_arquivo -d nome_da_collection -c books

? mongoexport - exporta database json
* comando -c collection / -d database / -o nome_arquivo.json
* mongoexport -c nome_collection -d nome_do_banco


*/

