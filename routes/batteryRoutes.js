const express = require("express");
const router = express.Router();

// Import the controller – make sure the file name and path match exactly.
const {addBatteryData,getAllBatteryData,getBatteryDataById,getBatteryField} = require("../controllers/BatteryController");
const { verifyToken } = require("../middlewares/auth");
const logger =require("../middlewares/logger")
// Use the middleware and controller function in your route.
router.post("/data", logger, addBatteryData);
router.get("/all",verifyToken,getAllBatteryData)
router.get("/:id",verifyToken,getBatteryDataById)
router.get("/data/:id/:field",verifyToken,getBatteryField)
module.exports = router;
