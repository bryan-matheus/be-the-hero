const express = require("express");
const routes = express.Router();
const OngController = require("./controllers/OngController");
const ProfileController = require("./controllers/ProfileController");
const SessionController = require("./controllers/SessionController");
const IncidentController = require("./controllers/IncidentController");

routes.get("/ongs", OngController.index);
routes.post("/ongs", OngController.store);

routes.get("/profile", ProfileController.index);

routes.post("/sessions", SessionController.store);

routes.get("/incidents", IncidentController.index);
routes.post("/incidents", IncidentController.store);
routes.delete("/incidents/:id", IncidentController.destroy);

module.exports = routes;
