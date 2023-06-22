const crypto = require('crypto')

var createHash =   (data, salt = '') => {
    let shasum = crypto.createHash('sha256').update(data + salt).digest('hex');
    return shasum;
  };
  module.exports = {
        createHash,
        HashComparer : (Users_Password , Stored_Password,salt)=>{
            return (Stored_Password === createHash(Users_Password,salt))
        },
        RandomString : (length)=>{
          return crypto.randomBytes(length).toString('hex');
        }
        
  }