// 유저 생성
async function getMypageList(connection) {
    const mypageInfoQuery =`
          select * from mypage;
    `
    const mypageInfoRow = await connection.query(
        mypageInfoQuery
    );
  
    return mypageInfoRow[0];
  }
  
  module.exports = {
    getMypageList,
  };