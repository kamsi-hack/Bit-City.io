const express = require("express");
const speakeasy = require("speakeasy");
const QRCode = require("qrcode");
const router = express.Router();

let userSecret = {}; // replace with DB storage

// Setup 2FA
router.post("/setup", async (req, res) => {

    const secret = speakeasy.generateSecret({
        length: 20,
        name: "Bit-City"
    });

    userSecret[req.body.user_id] = secret.base32;

    const qr = await QRCode.toDataURL(secret.otpauth_url);

    res.json({
        secret: secret.base32,
        qr
    });
});

// Verify 2FA
router.post("/verify", (req, res) => {

    const { user_id, token } = req.body;

    const verified = speakeasy.totp.verify({
        secret: userSecret[user_id],
        encoding: "base32",
        token: token,
        window: 1
    });

    if (verified)
        res.json({ status: "2FA verified" });
    else
        res.status(400).json({ error: "Invalid 2FA code" });
});

module.exports = router;
