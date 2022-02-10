const bcrypt = require("bcrypt");
const saltRounds = 10;
const User = require("../models/user");

function singUp(req, res) {
  const user = new User();

  const { name, lastName, email, password, repeatPassword } = req.body;

  user.name = name;
  user.lastName = lastName;
  user.email = email;
  user.role = "admin";
  user.active = false;

  if (!password || !repeatPassword) {
    res.status(404).send({ message: "las contraseñas son obligatorias" });
  } else {
    if (password !== repeatPassword) {
      res.status(404).send({ message: "las contraseñas son diferentes" });
    } else {
      bcrypt.hash(password, saltRounds, function (err, hash) {
        if (err) {
          res.status(500).send({ message: "Error al encriptar la contraseña" });
        } else {
          user.password = hash;
          user.save((err, userStored) => {
            if (err) {
              res.status(500).send({ message: "Error en el servidor" });
            } else {
              if (!userStored) {
                res.status(400).send({ message: "Error al crear el usuario" });
              } else {
                res.status(200).send({ user: userStored });
              }
            }
          });
        }
      });
    }
  }
}

module.exports = { singUp };
