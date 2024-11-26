const express = require("express");
const router = express.Router();
const ApplyController = require("../controllers/controllerApply")

    router.post('/', ApplyController.insert);

module.exports = router;