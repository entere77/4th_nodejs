const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const homeDao = require("./homeDao");

// Provider: Read 비즈니스 로직 처리

exports.homeList = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const homeList = homeDao.getHome(connection);
    connection.release();

    return homeList;
};