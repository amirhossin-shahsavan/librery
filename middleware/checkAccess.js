const People = require("../models/users");
const { Types } = require("mongoose");

exports.checkAdmin = (req, res, next) => {
  const user = People.findOne({
    _id: new Types.ObjectId(req.userId),
  }).then((user) => {
    if (user && user.role === "admin") {
      next();
    } else {
      res.status(403).json({ message: "not response for user" });
    }
  });
};
