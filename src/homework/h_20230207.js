import express from "express";
const app = express();

const home = (req, res) => {
    return res.send("<h1>Home</h1>");
};

const about = (req, res) => {
    return res.send("<h1>About</h1>");
};

const contact = (req, res) => {
    return res.send("<h1>Contact</h1>");
};

const login = (req, res) => {
    return res.send("<h1>Login</h1>");
};

app.listen();
app.get("/", home);
app.get("/about", about);
app.get("/contact", contact);
app.get("/login", login);

// Code Challenge
// blueprint를 사용하여 server.js 파일을 완성하고 Express 서버를 만드세요.
// 이 서버에는 4개의 GET 라우트(routes)가 있어야 합니다.
// 각 라우트는 /, /about, /contact, /login입니다.
// 모든 라우트는 클라이언트에게 HTML을 반환해야 합니다.
// 익스프레스 서버를 만들고 GET 라우트를 만들기 위해 다음 단계를 수행합니다. 1. express 모듈을 불러옵니다. 2. express()로 익스프레스 어플리케이션을 생성합니다. 3. /, /about, /contact, /login의 GET 라우트를 작성합니다.

// /: <h1>Home</h1>을 화면에 표시하는 GET 라우트
// /about: <h1>About</h1>을 화면에 표시하는 GET 라우트
// /contact: <h1>Contact</h1>을 화면에 표시하는 GET 라우트
// /login: <h1>Login</h1>을 화면에 표시하는 GET 라우트
// app.listen()을 사용하여 express 서버를 시작합니다.
// express()
// GET 라우트 예시

// app.get("/", (req, res) => res.send("<h1>Home</h1>")): HTML인 h1을 반환하는 “/” GET 라우트입니다.
// app.get(): GET 메서드는 콜백 함수를 사용하여 지정된 경로로 HTTP GET 요청을 보냅니다.
// res.send([body]): HTTP 응답을 보내는 응답 메서드입니다. body 매개변수로 Buffer 객체, 문자열, 객체, Boolean 또는 배열을 보낼 수 있습니다.
