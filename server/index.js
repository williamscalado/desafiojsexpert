import config from "./config/index.js";
import server from "./server.js";
import { logger } from './util/index.js'

server.listen(config.port)
.on('listening', ()=> logger.info(`server runing port ${config.port}`))