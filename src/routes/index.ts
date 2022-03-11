import express  from "express";
import sharp from 'sharp';
import path from 'path';
import { promises as fs } from "fs";
import imageMiddleware from "../utilities/imageMiddleware";
// import NodeCache from "node-cache";
// import nodeCacheMiddleware from "../utilities/routeCache";
// const cache = new NodeCache();
const router = express();

// router.use(express.static(__dirname + '/views'));

router.get('/' , imageMiddleware, (req, res) => {

    // interface ImageData {
    //     filename : string;
    //     imageWidth:number;
    //     imageHegiht:number;
    //  };
    // res.render('test')
    const imagePath: string = './assets/images';
    const requestQuery = req.query;
    const imageName: string = (requestQuery.filename as unknown) as string;
    // const imageData = req.query as unknown as ImageData;
   
    // console.log(typeof imageData.imageHegiht,typeof imageWidth,typeof req.params, req.params); 
        let file = sharp(path.resolve(imagePath,`full`, `${requestQuery.filename}.jpg`))
        let newImageName: string = imageName;
        if (requestQuery.width && requestQuery.height) {
            newImageName += `-${requestQuery.width}-${requestQuery.height}`
            const imageWidth: number = requestQuery.width as unknown as number;
            const imageHeight: number = requestQuery.height as unknown as number;
            file.resize( +imageWidth, +imageHeight );
        }
        
        
        // .resize(200)
        file.toBuffer()
        .then(info => {
            const newImagePath = path.resolve(imagePath, 'thumb',`${newImageName}.jpg`);
            // cache.set(req.originalUrl,newImageName,5000)
            fs.writeFile(newImagePath, info).then(() => {
                res.sendFile(newImagePath)
            });
    
    
        })
        .catch(error => {
            res.send("invalid image name"); 
            console.log('Image Erorr ', error);
        });



    
});

export default router;