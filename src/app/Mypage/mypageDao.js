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

// 관심목록 조회 기능
async function getHeartList(connection) {
  const heartInfoQuery =`
        select * from heart;
  `
  const heartInfoRow = await connection.query(
      heartInfoQuery
  );

  return haertInfoRow[0];
}

module.exports = {
  getMypageList,
  getHeartList,
};