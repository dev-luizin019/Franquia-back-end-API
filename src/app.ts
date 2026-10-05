import "dotenv/config";
import express from "express";
import routes from "./routes";
import helmet from "helmet";
import cors from "cors";
import { globalRateLimit } from "./shared/utils/globalRateLImit";
import errorHandler from "./shared/middlewares/errorHandler";
import { logger } from "./shared/utils/logger";
import { pinoHttp } from "pino-http";
const app = express();

app.use(helmet());

const corsOptions = ["GET", "POST", "PUT", "DELETE", "PATCH"];
const corsOrigin = process.env.FRONTEND_URL;
app.use(
  cors({
    origin: corsOrigin,
    methods: corsOptions,
    credentials: true,
  }),
);

app.use(pinoHttp({ logger }));

app.use(globalRateLimit);

app.use(express.json());

app.use("/api", routes);

app.use(errorHandler);
export default app;
