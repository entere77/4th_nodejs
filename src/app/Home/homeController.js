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
 * [GET] /categories
 */
exports.getHome = async function (req, res) {
    const home = await categoryProvider.allCategoriesList();

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


    return res.send(response(baseResponse.SUCCESS, allCategories));
};