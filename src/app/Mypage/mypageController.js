const jwtMiddleware = require("../../../config/jwtMiddleware");
const mypageProvider = require("../../app/Mypage/mypageProvider");
const mypageService = require("../../app/Mypage/mypageService");
const baseResponse = require("../../../config/baseResponseStatus");
const {response, errResponse} = require("../../../config/response");

const regexEmail = require("regex-email");
const {emit} = require("nodemon");