const express = require("express");
const router = express.Router();

// @route GET api/vatRates/getVatRates
// @desc Tests users route
// @access Public
router.get("/getVatRates", (req, res) => res.json({ values: [10, 12, 20] }));

module.exports = router;
