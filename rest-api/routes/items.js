const express = require("express");
const router = express.Router();
const Items = require("../models/Item");

///get-all route
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

//detete item
router.delete("/:id", async (request, response) => {
  let deleteId = request.params.id;
  try {
    const items = await Items.destroy({
      where: {
        id: deleteId,
      },
    });
    console.log(items);
    response.json({ code: "200" });
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});

//add item
router.post("/", async (req, response) => {
  try {
    const items = await Items.create({
      tokenId: req.body.tokenId,
      metadata: req.body.metadata,
      owner: req.body.owner,
      price: req.body.price,
      drop: req.body.drop,
      size: req.body.size,
      color: req.body.color,
      type: req.body.type,
    });
    console.log(items);
    response.send(items);
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});

//update price
router.patch("/:id", async (request, response) => {
  let Id = request.params.id;
  let newPrice = request.body.price;
  try {
    const items = await Items.update(
      { price: newPrice },
      {
        where: {
          id: Id,
        },
      }
    );
    console.log(items);
    response.json({ code: "200" });
  } catch (error) {
    console.log(error);
    response.send(error);
  }
});

module.exports = router;
