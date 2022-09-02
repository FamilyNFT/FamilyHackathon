const mongoose = require("mongoose");

const ItemSchema = mongoose.Schema({
  tokenId: {
    type: String,
    required: true,
  },
  metadata: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Items", ItemSchema);
