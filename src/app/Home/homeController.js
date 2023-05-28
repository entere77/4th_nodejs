const jwtMiddleware = require("../../../config/jwtMiddleware");
const homeProvider = require("../../app/Home/homeProvider");
const homeService = require("../../app/Home/homeService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 홈 화면 조회 기능 API
 * [GET] /home
 */
exports.getHome = async function (req, res) {
    const homepage = await homeProvider.homeList();

    return res.send(response(baseResponse.SUCCESS, homepage));
};