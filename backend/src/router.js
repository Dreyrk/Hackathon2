const express = require("express");
const multer = require("multer");

const router = express.Router();
const upload = multer({ dest: process.env.AVATAR_DIRECTORY });

// services d'auth
const {
  hashPassword,
  verifyPassword,
  verifyToken,
} = require("./services/auth");

const authControllers = require("./controllers/authControllers");
const firestationControllers = require("./controllers/firestationControllers");
const vehicleControllers = require("./controllers/vehicleControllers");
const userControllers = require("./controllers/userControllers");
const fileControllers = require("./controllers/fileControllers");

// Auth
router.post("/api/register", hashPassword, userControllers.add);
router.post(
  "/api/login",
  authControllers.getUserByEmailWithPasswordAndPassToNext,
  verifyPassword
);

// Gestion des firestations
router.get("/api/firestation", firestationControllers.browse);
router.get("/api/firestation/:id", firestationControllers.read);
router.post("/api/firestation", firestationControllers.add);
router.put("/api/firestation/:id", firestationControllers.edit);
router.delete("/api/firestation/:id", firestationControllers.destroy);

// Gestion des vehicles
router.get("/api/vehicle", vehicleControllers.browse);
router.get("/api/vehicle/:id", vehicleControllers.read);
router.get("/api/demo", vehicleControllers.getForDemo);

router.get(
  "/api/vehicle/firestation/:id",
  vehicleControllers.vehiclesByFirestation
);
router.get(
  "/api/vehicle/category/:category",
  vehicleControllers.findVehiclesByCat
);

router.put("/api/vehicle/move", vehicleControllers.moveVehicle);
router.put("/api/vehicle/maintenance", vehicleControllers.inMaintenance);

router.post("/api/vehicle", vehicleControllers.add);
router.put("/api/vehicle/:id", vehicleControllers.edit);
router.put("/api/vehicle/", vehicleControllers.changeavailable);
router.delete("/api/vehicle/:id", vehicleControllers.destroy);

// Fonction pour le front

router.get("/api/vehicle-available", vehicleControllers.showIsAvailable);
router.get("/api/vehicle-in-maintenance", vehicleControllers.showInMaintenance);

router.get("/api/users", userControllers.browse);
router.get("/api/users/:id", userControllers.read);
router.post(
  "/api/users",

  hashPassword,
  userControllers.add
);
router.put("/api/users/:id", hashPassword, verifyToken, userControllers.edit);
router.delete(
  "/api/users/:id",
  verifyToken,
  authControllers.userIsSuperAdmin,
  userControllers.destroy
);

// Gestion des avatars
router.post(
  "/api/avatars",
  verifyToken,
  upload.single("avatar"),
  fileControllers.renameAvatar,
  userControllers.updateAvatar
);
router.get("/api/avatars/:fileName", fileControllers.sendAvatar);

module.exports = router;
