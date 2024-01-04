const accessJWTGenerator = require('../utils/accessJWTGenerator')
const checkRefreshToken = require('../repo/checkRefreshToken')
const verifyToken = require('../utils/verifyToken')

module.exports = async (req, res, next) => {
    try {
      const decodedAccessToken = await verifyToken(req.cookies.accessToken);
      const decodedRefreshToken = await verifyToken(req.cookies.refreshToken);
      // 이부분은 나중에 프론트엔드에서 어떻게 토큰을 발송하는지에 따라 달라질거같아요
      // 현재는 확인을위해서 쿠키에서 토큰을 이용하게 되어있습니다!
      if (decodedAccessToken && decodedRefreshToken) {
        if (await checkRefreshToken(decodedRefreshToken.user_id, req.cookies.refreshToken)) {
          const newAccessToken = await accessJWTGenerator(decodedRefreshToken.user_id);
          req.user = await verifyToken(newAccessToken);
  
          // 응답을 통해 클라이언트의 쿠키를 삭제
          res.clearCookie('admin_access_token');
        }
      } else if (decodedAccessToken && decodedRefreshToken) {
        if (await checkRefreshToken(decodedRefreshToken.user_id, req.cookies.refresh_token)) {
          const newAccessToken = await accessJWTGenerator(decodedRefreshToken.user_id);
          req.user = await verifyToken(newAccessToken);
  
          // 응답을 통해 클라이언트의 쿠키를 삭제
          res.clearCookie('user_access_token');
        }
      } else if (!decodedRefreshToken) {
        return res.status(400).send({ message: "API 접근권한이 없습니다. (RT)" });
        // refresh 토큰이 없을때 재발급을 해준다고는 하지만 정리가 안되서 차단했습니다.
        // 원래의 개념이라면 refresh토큰을 재발급해주어야하지만
       // access token을 탈취당한 경우에 해당 토큰만을 가지고 요청할 때
      // refresh토큰을 할당해준다면 결국 refresh토큰도 부여받아 악용할 수 있기에 그냥 막아버렸습니다...
      }
  
      next();
    } catch (error) {
      // 에러 처리
      console.error(error);
      return res.status(500).send({ message: "서버 오류" });
    }
  };