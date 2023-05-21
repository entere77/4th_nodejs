const {logger} = require("../../../config/winston");
const {pool} = require("../../../config/database");
const secret_config = require("../../../config/secret");
const userProvider = require("./userProvider");
const userDao = require("./userDao");
const baseResponse = require("../../../config/baseResponseStatus");
const {response} = require("../../../config/response");
const {errResponse} = require("../../../config/response");

const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const {connect} = require("http2");

// Service: Create, Update, Delete 비즈니스 로직 처리

exports.createUser = async function (name, email, phone_number, birth, sex, nickname, img) {
    try {
       const connection = await pool.getConnection(async (conn)=>conn);

       const InfoResult = await userDao.createUserInfo(connection, name, email, phone_number, birth, sex, nickname, img);
       console.log('유저 생성 완료');
       connection.release();

       return response(baseResponse.SUCCESS);

    } catch (err) {
        logger.error(`App - postSignIn Service error\n: ${err.message} \n${JSON.stringify(err)}`);
        return errResponse(baseResponse.DB_ERROR);
    }
};