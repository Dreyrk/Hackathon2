const AbstractManager = require("./AbstractManager");

class FirestationManager extends AbstractManager {
  constructor() {
    super({ table: "firestation" });
  }

  insert(firestation) {
    return this.connection.query(
      `INSERT INTO ${this.table} (capacity, longitude, latitude)
    VALUES(?,?,?)`,
      [firestation.capacity, firestation.longitude, firestation.latitude]
    );
  }

  update(firestation) {
    return this.connection.query(
      `UPDATE ${this.table} SET capacity = ?, longitude = ?,
      latitude = ? WHERE id = ? `,
      [
        firestation.capacity,
        firestation.longitude,
        firestation.latitude,
        firestation.id,
      ]
    );
  }
}

module.exports = FirestationManager;
