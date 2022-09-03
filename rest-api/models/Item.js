const { DataTypes } = require("sequelize");
const sequelize = require("../db");

const Item = sequelize.define(
  "Item",
  {
    // Model attributes are defined here
    tokenId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    metadata: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    owner: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    // Other model options go here
  }
);
Item.sync().then(() =>
  console.log("The table for the User model was just (re)created!")
);
module.exports = Item;
