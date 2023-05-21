const jwtMiddleware = require("../../../config/jwtMiddleware");
const userProvider = require("../../app/User/userProvider");
const userService = require("../../app/User/userService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 유저생성 API 
 * [GET] /users/signup
 */
exports.signup= async function (req, res) {
    const {name, email, phone_number, birth, sex, nickname, img} =req.body;

    const signUpResponse = await userService.createUser(
        name, email, phone_number, birth, sex, nickname, img
    );

    return res.send(signUpResponse);
};