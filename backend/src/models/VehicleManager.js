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

  editIsAavailable(is_available, id) {
    return this.connection.query(
      `UPDATE ${this.table} SET is_available = ? WHERE id = ?`,
      [is_available, id]
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

  updateInMaintenance(id, value) {
    return this.connection.query(
      `UPDATE ${this.table} SET in_maintenance = ? WHERE id = ? `,
      [value, id]
    );
  }

  isavailable() {
    return this.connection.query(
      `select * from  ${this.table} where is_available = 1`
    );
  }

  inMaintenance() {
    return this.connection.query(
      `select * from  ${this.table} where in_maintenance = 0`
    );
  }
}

module.exports = VehicleManager;
