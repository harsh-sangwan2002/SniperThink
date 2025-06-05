// controllers/auth.controller.js
const { OAuth2Client } = require("google-auth-library");
const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);

const googleLogin = async (req, res) => {
    const { token } = req.body;
    try {
        const ticket = await client.verifyIdToken({
            idToken: token,
            audience: process.env.GOOGLE_CLIENT_ID,
        });

        const payload = ticket.getPayload();
        const tokens = {
            access_token: token,
            email: payload.email,
        };

        req.session.tokens = tokens;
        res.json({ message: "Authenticated", tokens });
    } catch (err) {
        console.error("Google login error", err);
        res.status(401).json({ message: "Invalid token" });
    }
};

module.exports = {
    googleLogin,
};