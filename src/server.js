import express from "express";
import morgan from "morgan";
import session from "express-session";
import rootRouter from "./routers/rootRouter.js";
import videoRouter from "./routers/videoRouter.js";
import userRouter from "./routers/userRouter.js";

// create application
const app = express();
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger);
app.use(express.urlencoded({ extended: true }));

app.use(
    session({
        secret: "Hello!",
        resave: true,
        saveUninitialized: true,
    })
);

app.use((req, res, next) => {
    req.sessionStore.all((error, sessions) => {
        console.log(sessions);
        next();
    });
});

app.use("/", rootRouter);
app.use("/videos", videoRouter);
app.use("/users", userRouter);

export default app;

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

// const Home = (req, res) => {
//     console.log(res.end);
//     return res.send("<h1>I love Middlewares</h1>");
// };

// const login = (req, res) => {
//     return res.send("login");
// };

// Start code

// app.use(privateMiddleware);
// app.get("/", handleHome);
// app.get("/login", login);
