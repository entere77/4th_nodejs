// 유저 생성
async function createUserInfo(connection, name, email, phone_number, birth, sex, nickname, img) {
  const insertUserInfoQuery =`
        INSERT INTO user(name, email, phone_number, birth, sex, createdAt, nickname, img, status, manner, coupon_coupon_id)
        VALUES ('${name}','${email}','${phone_number}','${birth}','${sex}',now(),'${nickname}','${img}','1','36.5',1);
  `

  const insertUserInfoRow = await connection.query(
    insertUserInfoQuery
  );

  return insertUserInfoRow[0];
}

module.exports = {
  createUserInfo,
};