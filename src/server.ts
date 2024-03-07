import express from "express"
import { registerRoutes } from "./routes";

const app = express();
app.use(express.json());

app.get('/', (req, res) => res.json({ message: "server is running" }))

//routes
registerRoutes(app)

app.listen(8888, () => console.log("Server is running"))