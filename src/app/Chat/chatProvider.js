const { pool } = require("../../../config/database");
const { logger } = require("../../../config/winston");

const chatDao = require("./chatDao");

// Provider: Read 비즈니스 로직 처리

exports.allChatsList = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const chatsList = chatDao.getChats(connection);
    connection.release();

    return chatsList;
};

exports.chatBySelect = async function (email) {
    const connection = await pool.getConnection(async (conn) => conn);
    const chatBySelect = chatDao.getChatBySelect(connection);
    connection.release();

    return chatBySelect;
};