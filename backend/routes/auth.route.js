const authRouter = require("express").Router();
const { googleLogin } = require("../controllers/auth.controller");

authRouter.post("/google-login", googleLogin);

module.exports = authRouter;
