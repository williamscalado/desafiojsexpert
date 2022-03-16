import {jest, expect, describe, test, beforeEach} from '@jest/globals'
import config from '../../../server/config'
const {
    pages:{
        homeHtml,
        constrolelrHtml
    }
} = config

describe('#Routes - Teste Api response', ()=>{
    beforeEach(()=>{
        jest.resetAllMocks()
        jest.clearAllMocks()
    })

    
    test.todo('GET / - redirect to home page')
    test.todo(`GET /home - redirect for ${homeHtml}`)
    test.todo(`GET /controller - redirect for ${constrolelrHtml}`)
    
})