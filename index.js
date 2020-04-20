import express from "express";
const app = express();

const PORT = 4000;

const handleListening = () =>
    console.log(`Listening on: http://localhost:${PORT}`);

const handleHome = (req, res, next) => res.send("Hello from my ass");

const handleProfile = (req, res, next) => res.send("You are on my profile");

const beetweenHome = (req, res, next) => {
    console.log("I'm beetween");
    next();
}

app.get("/", handleHome);

app.get("/profile", handleProfile);

app.use(beetweenHome);

app.listen(PORT, handleListening);