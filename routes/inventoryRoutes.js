const express = require("express");
const authMiddleware = require("../middlewares/authMiddleware");
const {
    createInventoryController,
    getInventoryController,
    getDonarsController,
    getHospitalController,
    getOrganisationController,
    getOrganisationForHospitalController,
         getInventoryHospitalController
} = require("../controllers/inventoryController");

const router = express.Router();

router.post("/create-inventory", authMiddleware, createInventoryController);
router.get("/get-inventory", authMiddleware, getInventoryController);
//GET DONAR RECORDS
router.get("/get-donars", authMiddleware, getDonarsController);
//GET HOSPITAL RECORDS
router.get("/get-hospitals", authMiddleware, getHospitalController);

//GET orgnaisation RECORDS
router.get("/get-organisation", authMiddleware, getOrganisationController);

router.get(
  "/get-organisation-for-hospital",
  authMiddleware,
  getOrganisationForHospitalController
);
//GET HOSPITAL BLOOD RECORDS
router.post(
  "/get-inventory-hospital",
  authMiddleware,
  getInventoryHospitalController
);
module.exports = router;