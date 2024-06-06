import express from "express";
import authRouter from "./routes/auth.route"
const app = express();

const baseRoute = "api/v1/"

app.use(`${baseRoute}/auth`, authRouter)

// app.use(`${baseRoute}`)
// app.use(`${baseRoute}`)
// app.use(`${baseRoute}`)
// app.use(`${baseRoute}`)



app.listen(8800, () => {
    console.log("started server on 8800")
})