const { Status } = require("brackets-model");
const chai = require("chai");
const assert = chai.assert;
const { BracketsManager, JsonDatabase } = require("brackets-manager");

const storage = new JsonDatabase();
const manager = new BracketsManager(storage);

chai.use(require("chai-as-promised"));

exports.doubleElimination = (req, res, next) => {
  storage.reset();

  manager.create({
    name: "Shap",
    tournamentId: 6,
    type: "double_elimination",
    seeding: [
      "Team 1",
      "Team 2",
      "Team 3",
      "Team 4",
      "Team 5",
      "Team 6",
      "Team 7",
      "Team 8",
      "Team 9",
      "Team 10",
      "Team 11",
      "Team 12",
      "Team 13",
      "Team 14",
      "Team 15",
      "Team 16",
    ],
    settings: { seedOrdering: ["natural"], grandFinal: "simple" },
  });

  const stage = storage.select("stage", 0);

  assert.strictEqual(stage.name, "Amateur");
  assert.strictEqual(stage.type, "double_elimination");

  assert.strictEqual(storage.select("group").length, 3);
  assert.strictEqual(storage.select("round").length, 4 + 6 + 1);
  assert.strictEqual(storage.select("match").length, 30);
};
