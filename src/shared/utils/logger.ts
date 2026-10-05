import path from "node:path";
import pino from "pino";
import pretty from "pino-pretty";
const localLogPath = path.join(process.cwd(), "logs", "app-local.log");

export const logger = pino(
  { level: "info" },
  pino.multistream([
    {
      stream: pretty({
        colorize: true,
        translateTime: "SYS:standard",
      }),
    },
    {
      stream: pino.destination({
        dest: localLogPath,
        mkdir: true,
        sync: false,
      }),
    },
  ]),
);
