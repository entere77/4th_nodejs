const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const mypageDao = require("./mypageDao");

// Provider: Read 비즈니스 로직 처리

exports.mypageList = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const mypageList = homeDao.getMypageList(connection);
    connection.release();

    return mypageList;
};

exports.heartList = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const heartList = homeDao.getHeartList(connection);
    connection.release();

    return heartList;
};