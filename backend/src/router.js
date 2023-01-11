const express = require("express");

const router = express.Router();

const itemControllers = require("./controllers/itemControllers");
const VehicleControllers = require("./controllers/VehicleControllers");
const BookingControllers = require("./controllers/BookingControllers");
const UserControllers = require("./controllers/UserControllers");

router.get("/items", itemControllers.browse);
router.get("/items/:id", itemControllers.read);
router.put("/items/:id", itemControllers.edit);
router.post("/items", itemControllers.add);
router.delete("/items/:id", itemControllers.destroy);

router.get("/vehicles", VehicleControllers.browse);
router.get("/vehicles/:id", VehicleControllers.read);
router.put("/vehicles/:id", VehicleControllers.edit);
router.post("/vehicles", VehicleControllers.add);

router.get("/booking", BookingControllers.browse);
router.post("/booking", BookingControllers.add);

router.get("/users", UserControllers.browse);
router.post("/users", UserControllers.add);

module.exports = router;
