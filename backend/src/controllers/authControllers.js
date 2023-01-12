const models = require("../models");

const getUserByEmailWithPasswordAndPassToNext = (req, res, next) => {
  const { email } = req.body;
  models.user
    .findByEmailWithPassword(email)
    .then(([users]) => {
      if (users[0]) {
        [req.user] = users;
        next();
      } else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const userIsAdmin = (req, res, next) => {
  const { payloads } = req.payloads;
  models.user
    .userHasRights(payloads.sub)
    .then(([isAdmin]) => {
      if (isAdmin[0].rights === 1) next();
      else res.sendStatus(401);
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

const userIsSuperAdmin = (req, res, next) => {
  const id = req.payloads.sub;
  models.user
    .userHasRights(id)
    .then(([isAdmin]) => {
      if (isAdmin[0].rights === 2) next();
      else {
        res.status(401).send("Unauthorized");
      }
    })
    .catch((error) => {
      console.error(error);
      res.sendStatus(500);
    });
};

module.exports = {
  getUserByEmailWithPasswordAndPassToNext,
  userIsAdmin,
  userIsSuperAdmin,
};
