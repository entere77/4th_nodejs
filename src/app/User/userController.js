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

    // 빈 값 체크
    if (!name) {
        return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));
    } else if (!email){
        return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));
    } else if (!phone_number){
        return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));
    } else if (!birth){
        return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));
    } else if (!sex){
        return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));
    } else if (!nickname){
        return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));
    } else if (!img){
        return res.send(response(baseResponse.SIGNUP_EMAIL_EMPTY));
    }


    const signUpResponse = await userService.createUser(
        name, email, phone_number, birth, sex, nickname, img
    );

    return res.send(signUpResponse);
};

/**
 * API No. 2
 * API Name : 유저 정보 수정 API 
 * [PUT] /users/:userId
 */
exports.updateinfo= async function (req, res) {
    const userId = req.params.userId;
    const {name, email, phone_number, birth, sex, nickname, img} =req.body;

    const updateResponse = await userService.updateUser(
        userId, name, email, phone_number, birth, sex, nickname, img
    );

    return res.send(updateResponse);
};