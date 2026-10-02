import rateLimit from "express-rate-limit";

export const globalRateLimit = rateLimit({
    windowMs: 15 * 60 * 1000,
    limit:300,
    message: {error: "Muitas requisições vindas dessse IP. Tente novamente em alguns minutos"},
    standardHeaders: "draft-7",
    legacyHeaders: false
})
