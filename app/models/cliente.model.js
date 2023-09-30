module.exports = (sequelize, Sequelize) => {

const Cliente = sequelize.define('cliente', {
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
});
return Cliente;
};
