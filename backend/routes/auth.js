const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const User = mongoose.model("User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../keys");
const requiredLogin = require("../middleware/requiredLogin");

router.post("/signup", (req, res) => {
    // console.log(req.body);
    // CHECK IF INPUT FIELDS ARE FILLED OUT
    const { username: username, email, password } = req.body;
    if (!username || !email || !password) {
        return res.status(422).json({ error: "Please fill out all fields" });
    }

    // CHECK IF USER ALREADY EXISTS
    User.findOne({ email: email }).then((savedUser) => {
        if (savedUser) {
            return res.status(422).json({ error: "User already exists" });
        }

        // CHANGE PASSWORD INTO HASH (BECAUSE OF SECURITY)
        bcrypt
            .hash(password, 12)
            .then((hashedPassword) => {
                const user = new User({
                    username,
                    email,
                    password: hashedPassword,
                });

                // SAVE USER IN MONGODB
                user.save()
                    .then((user) => {
                        res.json({ message: "saved successfully" });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            })
            .catch((err) => {
                console.log(err);
            });
    });
    // res.json({ message: "successfully posted" });
});

router.post("/login", (req, res) => {
    // CHECK IF USERNAME AND PASSWORD ARE FILLED OUT
    const { username, password } = req.body;
    if (!username || !password) {
        res.status(422).json({ error: "please add username or password" });
    }

    // CHECK IF USERNAME AND PASSWORD MATCH TOGETHER
    User.findOne({ username: username }).then((savedUser) => {
        if (!savedUser) {
            return res
                .status(422)
                .json({ error: "Invalid username or password" });
        }
        bcrypt
            .compare(password, savedUser.password)
            .then((doMatch) => {
                if (doMatch) {
                    // res.json({ message: "Successfully signed in!" });
                    const token = jwt.sign({ _id: savedUser._id }, JWT_SECRET);
                    const { _id, username, email } = savedUser;
                    res.json({ token, user: { _id, username, email } });
                } else {
                    return res.status(422).json({ error: "Invalid password" });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    });
});

module.exports = router;
