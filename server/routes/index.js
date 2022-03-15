import {
    logger
} from '../util/index.js'
import config from '../config/index.js'
import { Controller } from '../controller/index.js'

const { 
    location,
    pages: {
        homeHtml
    }
}  = config

const controller = new Controller()

async function routes(request, response) {
    const {method , url } = request

        if(method==='GET' && url ==='/'){
            response.writeHead(302, {
                'location': location.home
            })
        }

        if(method==='GET' && url ==='/home'){
            const {
                stream
            } = await controller.getFileStream(homeHtml)

            stream.pipe(response)
        }

    return response.end('helo boy!')
}
export function handler(request, response) {
    return routes(request, response)
        .catch(error => logger.error(`Error: ${error.stack}`))
}