const express = require(`express`);
const { createProperty } = require("../controllers/PropertyController");

const router = express.Router();

router.route("/properties").get(createProperty);

module.exports = router;
