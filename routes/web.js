const express = require("express");
const { getWebHook, postWebHook } = require("../controller/webhook");
const router = express.Router();

// middleware that is specific to this router
router.use((req, res, next) => {
  next();
});
router.get("/webhook", getWebHook);

// Create the endpoint for your webhook
router.post("/webhook", postWebHook);

module.exports = router;
