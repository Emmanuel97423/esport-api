const Game = require("../models/Game.model");

exports.addGame = (req, res, next) => {
  console.log(req.body);
  Game.findOne({ shortName: req.body.shortName })
    .then((shortName) => {
      if (shortName) {
        return res.status(401).json({ message: "Ce jeu extiste déjà" });
      } else {
        const game = new Game({
          name: req.body.name,
          shortName: req.body.shortName,
          fullName: req.body.fullName,
          copyrights: req.body.copyrights,
          platformsAvailable: req.body.platformsAvailable,
          teamSize: req.body.teamSize,
        });
        game
          .save()
          .then(() => res.status(201).json({ message: "Jeu enregistré!" }))
          .catch((err) =>
            res.status(401).json({ message: "Une erreur est survenu: " + err })
          );
      }
    })
    .catch((err) =>
      res.status(500).json({ message: "Une erreur est survenu" + err })
    );
};
