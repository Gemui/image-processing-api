## Image Api

Add your images inside assets\images\full and take advantage of image processing api for (Resize - Rotate - Save to disk for multiple choice)

## extension support 
JPEG, PNG, WebP, GIF

## Requirements
 Node.js >= 12.13.0 
 
## Installation

```shell
npm install
```
## Start Server

```shell
node ./dist
```

### Endpoint Url

 http://localhost:3000/api/images


### Query Params for endpoint

| Paramter      | Mandatory | Exmaple           |
| ------------- |:---------:| -----------------:|
| filename      | Required  | encenadaport.jpg  |
| width         | Optional  | 200               |
| height        | Optional  | 200               |
| rotate        | Optional  | 90                |

### width and height should be togther

## test

```shell
npm run test
```
