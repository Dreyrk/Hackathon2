const models = require("../models");

const browse = (req, res) => {
  models.Firestation.findAll()
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const read = (req, res) => {
  const { id } = req.params;

  models.Firestation.find(id)
    .then(([results]) => {
      if (results[0]) res.send(results[0]);
      else res.sendStatus(404);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const add = (req, res) => {
  const Firestation = req.body;

  models.Firestation.insert(Firestation)
    .then(([result]) => {
      res.location(`/api/Firestation/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const Firestation = req.body;
  Firestation.id = req.params.id;

  models.Firestation.update(Firestation)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const destroy = (req, res) => {
  const { id } = req.params;
  models.Firestation.delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  read,
  add,
  edit,
  destroy,
};