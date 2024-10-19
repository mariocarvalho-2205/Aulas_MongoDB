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

*/