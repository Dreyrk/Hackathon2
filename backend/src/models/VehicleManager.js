const AbstractManager = require("./AbstractManager");

class VehicleManager extends AbstractManager {
  constructor() {
    super({ table: "vehicle" });
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
        vehicle.caserne_id,
      ]
    );
  }

  update(vehicle) {
    return this.connection.query(
      `UPDATE ${this.table} SET modele = ?, category = ?, in_maintenance = ?,
      is_available = ?, caserne_id = ? WHERE id = ? `,
      [
        vehicle.modele,
        vehicle.category,
        vehicle.is_available,
        vehicle.in_maintenance,
        vehicle.caserne_id,
        vehicle.id,
      ]
    );
  }

  isavailable() {
    return this.connection.query(`select * from  ${this.table} where is_available = 1`);
  }

  inMaintenance() {
    return this.connection.query(`select * from  ${this.table} where in_maintenance = 0`);
  }

 
}

module.exports = VehicleManager;
