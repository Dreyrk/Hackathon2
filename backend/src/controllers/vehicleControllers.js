const models = require("../models");

const browse = (req, res) => {
  models.vehicle
    .findAll()
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

  models.vehicle
    .find(id)
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
  const vehicle = req.body;
  vehicle.user_id = req.payloads.sub;

  models.vehicle
    .insert(vehicle)
    .then(([result]) => {
      res.location(`/api/vehicle/${result.insertId}`).sendStatus(201);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const edit = (req, res) => {
  const vehicle = req.body;
  vehicle.id = req.params.id;

  models.vehicle
    .update(vehicle)
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
  models.vehicle
    .delete(id)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const vehiclesByFirestation = (req, res) => {
  const { id } = req.params;
  models.vehicle
    .findVehicleByFirestation(id)
    .then(([results]) => {
      res.send(results);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const moveVehicle = (req, res) => {
  const { firestationId, vehicleId } = req.body;
  models.vehicle
    .moveVehicle(firestationId, vehicleId)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const inMaintenance = (req, res) => {
  const { id, value } = req.body;
  models.vehicle
    .inMaintenance(id, value)
    .then(([result]) => {
      if (result.affectedRows === 0) res.sendStatus(404);
      else res.sendStatus(204);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const findVehiclesByCat = (req, res) => {
  const { category } = req.params;
  models.vehicle
    .getCasernsVehiclesByCat(`${category}`)
    .then(([results]) => {
      res.send(results);
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
  vehiclesByFirestation,
  moveVehicle,
  inMaintenance,
  findVehiclesByCat,
};
