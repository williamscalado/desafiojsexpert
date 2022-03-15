import {
    logger
} from '../util/index.js'
import config from '../config/index.js'
import {
    Controller
} from '../controller/index.js'

const {
    location,
    pages: {
        homeHtml,
        constrolelrHtml
    }
} = config

const controller = new Controller()

async function routes(request, response) {
    const {
        method,
        url
    } = request

   
    if (method === 'GET' && url === '/') {
        response.writeHead(302, {
            'location': location.home
        })

        return response.end()
    }

    if (method === 'GET' && url === '/home') {
        const {
            stream
        } = await controller.getFileStream(homeHtml)


        return stream.pipe(response)
    }

    if (method === 'GET' && url === '/controller') {
        const {
            stream
        } = await controller.getFileStream(constrolelrHtml)


        return stream.pipe(response)
    }
    if(method === 'GET'){
        const { 
            stream,
            type
        } = await controller.getFileStream(url)
    return stream.pipe(response)
    }
    response.writeHead(404)
    return response.end()
}
function handlerError(error, response){
  if(error.message.includes('ENOENT')) {
      logger.info(`Asset not found ${error.stack}`)
        response.writeHead(404)
        return response.end()
    } 
    logger.error(`Error API ${error.stack}`)
    response.writeHead(500)
    return response.end()
}

export function handler  (request, response) {
    return routes(request, response)
        .catch(error => handlerError(error, response))
}