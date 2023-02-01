import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter.js";
import videoRouter from "./routers/videoRouter.js";
import userRouter from "./routers/userRouter.js";

const PORT = 4000;

// create application
const app = express();
const logger = morgan("dev");
app.use(logger);

app.use("/", globalRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

// const logger = (req, res, next) => {
//     console.log(`${req.method} ${req.url}`);
//     next();
// };

// const privateMiddleware = (req, res, next) => {
//     const url = req.url;
//     if (url === "/protected") {
//         return res.send("<h1>Not Allowed</h1>");
//     }
//     console.log("Allowed, you may contiune.");
//     next();
// };

const Home = (req, res) => {
    console.log(res.end);
    return res.send("<h1>I love Middlewares</h1>");
};

const login = (req, res) => {
    return res.send("login");
};

// Start code

// app.use(privateMiddleware);
// app.get("/", handleHome);
// app.get("/login", login);

const handleListening = () => console.log(`Server listenting on port http://localhost:${PORT} 🚀`);
app.listen(PORT, handleListening);
