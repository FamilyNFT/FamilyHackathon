const express = require("express");
const router = express.Router();
const Items = require("../models/Item");

router.get("/", async (request, response) => {
  try {
    const items = await Items.findAll();
    console.log(items);
    response.send(items);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});
router.post("/", async (req, response) => {
  try {
    const items = await Items.create({
      tokenId: req.body.tokenId,
      metadata: req.body.metadata,
      owner: req.body.owner,
    });
    console.log(items);
    response.send(items);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});

module.exports = router;
