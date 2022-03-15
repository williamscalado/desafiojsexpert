import { Service } from "../service/index.js"
export class Controller{
    constructor(){
        this.Service = new Service()
    }
    async getFileStream(filename){
        return this.Service.getFileStream(filename)
    }
}