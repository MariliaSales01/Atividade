module.exports = (sequelize, Sequelize) => {
const database = require("config./db.config");

const Cadastro = database.define('cadastro', {
    id:{
        type: Sequelize.INTEGER,
        autoTncrement: true,
        primaryKey:true
    },
    nome:{
        type: Sequelize.STRING,
        allowNull: false
    },
    altura:{
        type: Sequelize.DECIMAL
    },
    peso:{
        type: Sequelize.DECIMAL
    },
    brasileiro:{
        type: Sequelize.BOOLEAN
    },
    idade:{
        type: Sequelize.INTEGER 
    }
})
}
module.exports = Cadastro;