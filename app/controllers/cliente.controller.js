const db = require("../models");
const Cliente= db.cadastro;
const Op = db.Sequelize.Op;

exports.create = (req, res) => {
    if (!req.body.nome) {
        res.status(400).send({
          message: "O conteúdo não pode ser vazio!"
        });
        return;
    }

    const cliente = {
        nome: req.body.nome,
        altura: req.body.altura,
        peso: req.body.peso,
        brasileiro: req.body.brasileiro ? req.body.brasileiro : false,
        idade: req.body.idade
    };

    Cliente.create(cliente)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar criar o cadastro."
      });
    });
};

exports.findAll = (req, res) => {
    const nome = req.query.nome;
    var condition = nome ? { nome: { [Op.iLike]: `%${nome}%` } } : null;
  
    Cadastro.findAll({ where: condition })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Algum erro ocorreu ao tentar pesquisar os itens."
        });
      });
};

exports.findOne = (req, res) => {
    const id = req.params.id;

    Cadastro.findByPk(id)
      .then(data => {
        if (data) {
          res.send(data);
        } else {
          res.status(404).send({
            message: `Não foi possível encontrar o item com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar encontrar o item com o id=" + id
        });
      });
};

exports.update = (req, res) => {
    const id = req.params.id;

    Cadastro.update(req.body, {
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O Cadastro foi atualizado."
          });
        } else {
          res.send({
            message: `Não foi possivel atualizar o cadastro com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar atualizar o cadastro com o id=" + id
        });
      });
};

exports.delete = (req, res) => {
    const id = req.params.id;

    Cadastro.destroy({
      where: { id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "O Cadastro foi apagado com sucesso."
          });
        } else {
          res.send({
            message: `Não foi possivel apagar o cadastro com o id=${id}.`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Algum erro ocorreu ao tentar apagar o cadastro com o id=" + id
        });
      });
};

exports.deleteAll = (req, res) => {
   Cadastro.destroy({
        where: {},
        truncate: false
      })
        .then(nums => {
          res.send({ message: `${nums} Itens foram apagados com sucesso.` });
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Algum erro ocorreu ao tentar apagar todos os itens."
          });
        });
};

exports.findAllFlammables = (req, res) => {
   Cadastro.findAll({ where: { isFlammable: true } })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Algum erro ocorreu ao tentar pesquisar todos os cadastros."
      });
    });
};