const pool = require("../config/database");

module.exports = async function deleteEmployee(id) {
  try {
    const [rows, fields] = await pool.query("DELETE FROM events WHERE id = ?", [
      id,
    ]);
    return rows.affectedRows > 0; // Return true if deletion was successful
  } catch (error) {
    console.error(`Error deleting event with ID ${id}:`, error);
    throw error;
  }
};
