import express from "express";
import dotenv from "dotenv";
// import cors from "cors";
// import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.route"
import postRoute from "./routes/post.route"
import testRoute from "./routes/test.route"
import cors from "cors";
import cookieParser from "cookie-parser";
import userRoute from "./routes/user.route";

dotenv.config();
const app: express.Express = express();

const options: cors.CorsOptions = {
  origin: 'http://localhost:5173',
  credentials: true
};

app.use(cors(options))
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
app.use(cookieParser())
app.use("/api/post", postRoute);
app.use("/api/auth", authRoute);
app.use("/api/test", testRoute);
app.use("/api/users", userRoute);

app.listen(8800, () => {
    console.log("Server is running!");
});

