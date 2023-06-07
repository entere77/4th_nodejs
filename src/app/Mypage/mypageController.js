const jwtMiddleware = require("../../../config/jwtMiddleware");
const mypageProvider = require("../../app/Mypage/mypageProvider");
const mypageService = require("../../app/Mypage/mypageService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");

/**
 * API No. 1
 * API Name : 마이페이지 조회 기능 API
 * [GET] /mypage
 */
exports.getMypage = async function (req, res) {
    const mypage = await mypageProvider.mypageList();

    return res.send(response(baseResponse.SUCCESS, mypage));
};

/**
 * API No. 2
 * API Name : mypage 관심목록 조회 기능
 * [GET] /mypage/heart
 */
exports.getHeart = async function (req, res) {
    const heart = await mypageProvider.heartList();

    return res.send(response(baseResponse.SUCCESS, heart));
};