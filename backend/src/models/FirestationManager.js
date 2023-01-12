const AbstractManager = require("./AbstractManager");

class CaserneManager extends AbstractManager {
  constructor() {
    super({ table: "firestation" });
  }

  findAll() {
    return this.connection.query(`select * from ${this.table}`);
  }

  insert(caserne) {
    return this.connection.query(
      `INSERT INTO ${this.table} (name, capacity, longitude, latitude, img)
    VALUES(?,?,?,?,?)`,
      [
        caserne.name,
        caserne.capacity,
        caserne.longitude,
        caserne.latitude,
        caserne.img,
      ]
    );
  }

  update(caserne) {
    return this.connection.query(
      `UPDATE ${this.table} SET capacity = ?, longitude = ?,
      latitude = ? WHERE id = ? `,
      [caserne.capacity, caserne.longitude, caserne.latitude, caserne.id]
    );
  }
}

module.exports = CaserneManager;
