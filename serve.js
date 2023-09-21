const express = require('express')
const app = express();
const port = 8080;

app.use(express.json());

const users = [];

app.get("/users",(request,response) => {
    return response.json(users)
});

app.post("/users",(request,response) => {
    const name = request.body.name
    const age = request.body.age
    const height = request.body.height
    const brasileira = request.body.brasileira

    users.push({name,age,brasileira,height })
    return response.json({name,age,brasileira,height,brasileira,height})
});

const db = require("./app/models");
db.sequelize.sync()
.then(() => {
  console.log("Banco sincronizado.");
})
.catch((err) => {
  console.log("Falha ao acessar o banco de dados: " + err.message);
});

require("./app/routes/items.routes")(app);


app.listen(port);