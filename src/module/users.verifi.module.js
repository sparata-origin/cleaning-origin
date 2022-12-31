const bcrypt = require('bcrypt');

class UsersVerifi {

  passwordEncryption = async (password) => {
    const passwordHash = await bcrypt.hash(password, 10)
    
    return passwordHash
  }

  // LOGIN API 만드실때 사용하세요!! Password
  passwordCheck = async (password,해쉬화되어있는암호) => {

    // 입력받은 password가 DB에서 빼온 해쉬와되어있는암호와 같다면 Ture 다르다면 false를 반환
    const checkPassword = await bcrypt.compare(password , 해쉬화되어있는암호)

    return checkPassword
  }
}

module.exports = UsersVerifi;