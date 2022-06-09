// console.log('hello');
import express from "express";

const app = express();

app.set("view engine", "pug");
app.set("views", __dirname + "/views");
// _dirname -> Node.js 기본 전역 변수, 현재 실행하는 폴더의 경로
// 이 프로젝트에서는 Noom의 src 폴더 경로가 할당되어 있음.

app.get("/",  (req, res)  => res.render("home"));
app.get("/*",  (req, res)  => res.render("/"));
// 어떤 주소를 입력해ㅓㅅ 서버에 접근하더라도 사용자는 home.pug를 받음
const handleListen = () => console.log("Listenling on http://localhost:3000")
app.listen(3000,handleListen);
