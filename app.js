import express from "express"
import authRouter from "./routes/auth.route.js"
import userRouter from "./routes/user.route.js"
import postRouter from "./routes/post.route.js"


import cookieParser from "cookie-parser";
import cors from "cors"
const app = express();

// console.log(process.env.CLIENT_URL);
app.use(cors({ origin: "http://localhost:5173", credentials: true }))
app.use(express.json())
app.use(cookieParser());

const baseRoute = "/api/v1"


app.use(`${baseRoute}/auth`, authRouter)
app.use(`${baseRoute}/users`, userRouter)
app.use(`${baseRoute}/posts`, postRouter)

// app.use(`${baseRoute}`)
// app.use(`${baseRoute}`)
// app.use(`${baseRoute}`)


app.all("*", (req, res) => {
    console.log("wrong route hit")
    res.status(404).json({ "error": "Resource not found" });
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});