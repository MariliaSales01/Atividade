const express = require('express')
const cors = require ("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions));
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(cors(corsOptions));
const db = require("./app/models");
db.sequelize.sync()
.then(() => {
  console.log("Banco sincronizado.");
})
.catch((err) => {
  console.log("Falha ao acessar o banco de dados: " + err.message);
});

require("./app/routes/clientes.routes")(app);

const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
    console.log(`Server funcionando na porta ${PORT}.`);
});
