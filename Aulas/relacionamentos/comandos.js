/*
? embedded
One to One
db.embedded.insertOne({
    nome: "Mario",
    idade: 49,
    endereco: {
        rua: "Rua da Aroeira Vermelha",
        numero: "38A",
        complemento: "Casa"
    }
})


One to Many
db.embedded.insertOne({
    nome: "João",
    idade: 25,
    endereco: {
        casa: {
            rua: "Rua das Flores",
            numero: "500",
            complemento: "casa"
        },
        trabalho: {
            rua: "Rua da Selva",
            numero: "1452",
            complemento: "Galpão"
        }
    }
})

? One to One
// cria banco
use cadastro 

// cria collection
db.pessoas.insertOne({ 
    nome: "Mario",
    idade: "49"
})

// cria variavel com dado da 1ª pessoa
const pessoa = db.pessoa.findOne()
pessoa.nome
pessoa._id

// cria endereço da 1ª pessoa
db.endereco.insertOne({
    rua: "Rua da Aroeira",
    numero: "38A",
    complemento: "Casa",
    id_pessoa: pessoa._id
})

// localizando dado relacionado
* sintaxe collection  chave_id: variavel._id
db.endereco.find({ id_pessoa: pessoa1._id})

? One to Many
db.compras.insertMany([{
    {produtos: ["Livro", "celular"], pessoa_id: marioId]},
    {produtos: ["Caderno", "Lapis"], pessoa_id: marioId]},
    {produtos: ["Livro", "celular"], pessoa_id: joaoId]},
    {produtos: ["Livro", "celular"], pessoa_id: joaoId]},
}])

! para localizar as compras do usuario, fazemos a busca filtrando 
! na collection usando a variavel do is da pessoa
* sintaxe 
db.compras.find({ pessoa_id: nome_da_variavel_e_referencia})

*/