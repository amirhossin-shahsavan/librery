const People = require("../../models/users");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const crypto = require("crypto");
exports.login = (req, res) => {
  const { cellPhone, password } = req.body;
  console.log(`>>>>${cellPhone}`);
  console.log(`>>>>${password}`);
  People.findOne({
    cellPhone,
  }).then((user) => {
    if (!user) {
      console.log("user not found");
      res.send("user not found");
    } else {
      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const token = jwt.sign({ userId: user._id }, "gholi");
          console.log(`>>>>> ${token}`);
         
          res.json({ token });
          //res.send("login is succsessfully");
        }
      });
    }
  });
};
exports.signUp = (req, res) => {
  const { name, family, role, age, cellPhone, password, brithDay, active } =
    req.body;

  console.log(
    `>>>>${(name, family, role, age, cellPhone, password, brithDay, active)}`
  );

  People.findOne({
    cellPhone,
  })
    .then((userDoc) => {
      if (userDoc) {
        res.send("other user sign up with this cellPhone");
      }
      return bcrypt.hash(password, 12).then((hashedPassword) => {
        const poeple = new People({
          name,
          family,
          role,
          age,
          cellPhone,
          password: hashedPassword,
          brithDay,
          active,
        });

        return poeple.save();
      });
    })

    .then((savedUser) => res.status(201).json(savedUser))
    .catch((err) => res.status(500).json({ error: err.message }));
};


