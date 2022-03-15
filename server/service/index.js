import fs from 'fs'
import fsPromises from 'fs/promises'
import {
    join,
    extname
} from 'path'
import  config  from '../config/index.js'

const {
    dir:{
        puclicDirectory
    }
} = config
export class Service {

    createFileStream(filename) {
        return fs.createFileStream(filename)
    }

    async getFileInfo(file) {
        const fullFilePath = join(puclicDirectory , file)
        // valida se existe o arquivo
        await fsPromises.access(fullFilePath)
        const fileType = extname(fullFilePath)

        return {
            type: fileType,
            name: fullFilePath
        }

    }

    async getFileStream(file) {
        const {
            name,
            type

        } = await this.getFileInfo()

        return {
            stream: this.createFileStream(name),
            type: type
        }
    }

}