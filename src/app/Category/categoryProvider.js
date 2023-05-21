const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const categoryDao = require("./categoryDao");

// Provider: Read 비즈니스 로직 처리

exports.allCategoriesList = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const categoriesList = categoryDao.getCategories(connection);
    connection.release();

    return categoriesList;
};