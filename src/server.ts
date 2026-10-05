import "dotenv/config"
import app from "./app"
import { logger } from "./shared/utils/logger";

const PORT = process.env.PORT || 3000

app.listen(PORT, ()=>{
    logger.info(`Servidor rodando em http://localhost:${PORT}`);
})