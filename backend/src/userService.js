var userModel = require('./userModel');
var key = 'mystudentsaretalented';
var encryptor = require('simple-encryptor')(key);
//save user
module.exports.saveUserInfoService = (userDetails) => {
    return new Promise(function saveUserInfoFun(resolve, reject){
        var userModelData = new userModel();
        userModelData.username = userDetails.username;
        userModelData.email = userDetails.email;
        //Code to encrypt password
        var encryptedPassword = encryptor.encrypt(userDetails.password);
        userModelData.password = encryptedPassword;

        userModelData.save(function resultHandle(error, result){
            if(error){
                reject(false);
            }else{
                resolve(true);
            }
        });
    });
}

module.exports.userLoginService = (userLoginDetails) => {
    return new Promise(function userLoginFunctionality(resolve, reject){
        userModel.findOne({email: userLoginDetails.email}, function getLoginResult(error, result){
            if(error){
                reject({status: false, message: "Invalid Data"});
            }else{
                if(result != undefined && result != null){
                    var decryptedPassword = encryptor.decrypt(result.password);
                    if(decryptedPassword == userLoginDetails.password){
                        resolve({status: true, message: "User validated Successfully"});
                    }else{
                        reject({status: false, message: "User validation failed"});    
                    }
                }else{
                    reject({status: false, message: "Error in User Information"});
                }
            }
        });
    });
}
module.exports.getUserInfoService = (email) => {
    return new Promise((resolve, reject) => {
        userModel.findOne({ email: email }, function (error, user) {
            if (error) {
                console.error("Error while searching for user in DB:", error);
                reject({ status: false, message: "Error fetching user information." });
            } else {
                if (user) {
                    // Exclude the password and other sensitive fields if needed
                    const userProfile = {
                        username: user.username,
                        email: user.email,
                        // ... other fields you want to send but DO NOT send the password
                    };
                    resolve({ status: true, user: userProfile });
                } else {
                    reject({ status: false, message: "User not found." });
                }
            }
        });
    });
}

module.exports.updateUserProfileService = (userId, updatedProfile) => {
    return new Promise((resolve, reject) => {
      userModel.findByIdAndUpdate(
        userId,
        { $set: updatedProfile },
        { new: true }, // To get the updated user object in the response
        (error, updatedUser) => {
          if (error) {
            console.error("Error updating user profile in DB:", error);
            reject(false);
          } else {
            if (updatedUser) {
              resolve(true);
            } else {
              reject(false);
            }
          }
        }
      );
    });
  };
