var userService = require('./userService');

var saveUserInfoController = async(req, res) => {
    try {
        var status = await userService.saveUserInfoService(req.body);
        if (status) {
            res.send({ "status": true, message: "UserInfo saved Successfully." });
        } else {
            res.send({ "status": false, message: "Error in saving UserInfo." });
        }
    } catch (error) {
        console.log(error);
    }
}

var loginUserInfoController = async(req, res) => {
    var result = null;
    try {
        result = await userService.userLoginService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.message });
        } else {
            res.send({ "status": false, "message": result.message });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.message });
    }
}

var getUserInfoController = async(req, res) => {
    try {
        console.log("Inside getUserInfoController");
        console.log("Request Body:", req.body);
        const userEmail = req.body.email;  // assuming you are sending email in the body
        console.log("Fetching info for user:", userEmail);
        const result = await userService.getUserInfoService(userEmail);
        console.log("User Info Result:", result);
        if (result.status) {
            res.send({ status: true, user: result.user });
        } else {
            res.send({ status: false, message: result.message });
        }
    } catch (error) {
        console.error("Error fetching user info:", error);
        res.send({ status: false, message: error.message });
    }
};

var updateUserProfileController = async (req, res) => {
    try {
      const { username, email } = req.body;
      const userId = req.user.id;
  
      // Call the userService to update the user's profile
      const status = await userService.updateUserProfileService(userId, { username, email });
  
      if (status) {
        res.send({ status: true, message: "Profile updated Successfully." });
      } else {
        res.send({ status: false, message: "Error in updating profile." });
      }
    } catch (error) {
      console.error("Error updating user profile:", error);
      res.send({ status: false, message: error.message });
    }
  };

  module.exports = {
    saveUserInfoController,
    loginUserInfoController,
    getUserInfoController,
    updateUserProfileController
  };