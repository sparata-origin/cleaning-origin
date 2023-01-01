const bcrypt = require("bcrypt");

class UsersVerifi {
  checkPassword = async (password, confirmPasswrod) => {
    if (password !== confirmPasswrod) {
      return false;
    }
    return true;
  };

  checkEmail = async (email) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+$/;

    if (!emailRegex.test(email)) {
      return false;
    }
    return true;
  };

  passwordEncryption = async (password) => {
    const passwordHash = await bcrypt.hash(password, 10);

    return passwordHash;
  };

  // LOGIN API 만드실때 사용하세요!! Password
  passwordVerifi = async (password, 해쉬화되어있는암호) => {
    // 입력받은 password가 DB에서 빼온 해쉬와되어있는암호와 같다면 Ture 다르다면 false를 반환
    const checkPassword = await bcrypt.compare(password, 해쉬화되어있는암호);

    return checkPassword;
  };
}

module.exports = UsersVerifi;
