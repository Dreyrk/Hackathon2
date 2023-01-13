const AbstractManager = require("./AbstractManager");

class firestationManager extends AbstractManager {
  constructor() {
    super({ table: "firestation" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  insert(firestation) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, capacity, longitude, latitude, img)
    VALUES(?,?,?,?,?)`,
      [
        firestation.name,
        firestation.capacity,
        firestation.longitude,
        firestation.latitude,
        firestation.img,
      ]
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

module.exports = firestationManager;
