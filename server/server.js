import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import dbConnect from "./config/mongoose.config.js";
import router from "./routes/task.routes.js";

const app = express();
app.use(express.json(), cors());
dotenv.config();

const PORT = process.env.PORT;
dbConnect();

app.use('/api', router);

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
