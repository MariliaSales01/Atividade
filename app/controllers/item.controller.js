(async () => {

    const database = require('config/db.js');
    const Cadastro = require('models/item.model');
    await database.sync();

    const novoCadastro = Cadastro.create({
        nome: 'Luana'
    })
})