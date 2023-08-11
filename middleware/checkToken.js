const jwt = require("jsonwebtoken");

function verifyToken(req, res, next) {
  const token = req.headers.token;
  console.log(`>>>>>>>>>+++++++++${token}`);
  if (!token) {
    return res.status(401).json({ message: "token not found" });
  }

  jwt.verify(token, "gholi", (err, decoded) => {
    console.log(decoded);

    if (err) {
      return res.status(401).json({ message: "Invalid token" });
    }
    req.userId = decoded.userId;

    next();
  });
}

module.exports = {
  verifyToken,
};
