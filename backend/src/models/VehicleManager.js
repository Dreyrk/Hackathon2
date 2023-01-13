/* eslint-disable camelcase */
const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  insert(vehicle) {
    return this.connection.query(
      `INSERT INTO ${this.table} (modele, category, is_available, in_maintenance)
    VALUES(?,?,?,?)`,
      [
        vehicle.modele,
        vehicle.category,
        vehicle.is_available,
        vehicle.in_maintenance,
        vehicle.firestation_id,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `UPDATE ${this.table} SET modele = ?, category = ?, in_maintenance = ?,
      is_available = ?, firestation_id = ? WHERE id = ? `,
      [
        vehicle.modele,
        vehicle.category,
        vehicle.is_available,
        vehicle.in_maintenance,
        vehicle.firestation_id,
        vehicle.id,
      ]
    );
  }

  findVehicleByFirestation(firestationId) {
    return this.connection.query(
      `select * from ${this.table}
    where firestation_id=?`,
      [firestationId]
    );
  }

  moveVehicle(firestationId, vehicleId) {
    return this.connection.query(
      `UPDATE ${this.table} SET firestation_id = ? WHERE id = ? `,
      [firestationId, vehicleId]
    );
  }

  inMaintenance(id, value) {
    return this.connection.query(
      `UPDATE ${this.table} SET in_maintenance = ? WHERE id = ? `,
      [value, id]
    );
  }

  getCasernsVehiclesByCat(category) {
    return this.connection.query(
      `select f.id, count(v.id) as vehicles, f.latitude, f.longitude, f.name from vehicle as v
      inner join firestation as f on v.firestation_id = f.id
      where v.category=? and v.is_available = 1
      group by f.id
      ;`,
      [category]
    );
  }
}

module.exports = VehicleManager;
