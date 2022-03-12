import supertest from 'supertest'
import app from '../index'
import {promises as fs} from 'fs'
import path from 'path';

const request = supertest(app); 

describe('Test image endpoint  responses', () => {
   
   
    it('Test Response with no image attribute in query params should be : File name is required', async () => {
        const response = await request.get('/api/images');
        expect(response.status).toBe(200)
        expect(response.text).toEqual('File name is required')
    
    })

    it('Test Response with invalid image name should be : invalid image name', async () => {
        const response = await request.get('/api/images/?filename=invalid-image-name.jpg');
        expect(response.text).toEqual('invalid image name')
    
    })

});

