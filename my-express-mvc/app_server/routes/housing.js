const express = require("express");
const router = express.Router();
const HousingController = require("../controllers/controllerHousing")

    router.get("/", HousingController.Index);
    router.get('/{id}', HousingController.Index);

module.exports = router;