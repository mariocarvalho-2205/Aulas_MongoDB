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
? Operador in - utilizado para pesquisar mais de uma opção // or
* db.<collection>.find({chave: {$in: ["valor_1", "valor_2"]}}) //// retorna valores que tenham um dos dois dados
? Operador e - equivalente ao &&
* db.<collection>.find({chave: valor, chave: valor}) //// retorna valores que atendam as duas condiçoes
? Operador $gt - equivalente a maior que
* db.books.find({pageCount: {$gt: 800}, _id: {$gt: 242}})

? pretty - retorna os dados com um melhor formato
* ex: db.nome_collection.insertOne({nome: "joao", idade: 35, hobbies: ["Programar", "Jogar", "Correr", "Ler"], profissao: "Programador", salario: 300000, esta_trabalhando: true})
* db.collection.find({}).pretty() - organiza os dados exibidos
* metod it e uma forma de retornar menos dados


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



*/

