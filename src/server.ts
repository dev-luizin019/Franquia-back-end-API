import "dotenv/config";
import app from "./app";
import { logger } from "./shared/utils/logger";

const PORT = Number(process.env.PORT) || 3000;

app.listen(PORT, "0.0.0.0", () => {
  logger.info(`Servidor rodando em http://localhost:${PORT}`);
});
