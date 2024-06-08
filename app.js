import express from "express"
import authRouter from "./routes/auth.route.js"
import cookieParser from "cookie-parser";

const app = express();

app.use(cookieParser());
app.use(express.json())

const baseRoute = "/api/v1"

// app.use("/api/v1/auth", authRouter)

app.use(`${baseRoute}/auth`, authRouter)

// app.use(`${baseRoute}`)
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