import express from 'express';
import imageMiddleware from '../../utilities/imageMiddleware';
import imageQueryMiddleware from '../../utilities/imageQueryMiddleware';
import HandleImageData from '../../utilities/handleImageData';
const router = express();

router.get(
  '/',
  imageMiddleware,
  imageQueryMiddleware,
  async (req: express.Request, res: express.Response): Promise<void> => {
    const handleImageData: HandleImageData = new HandleImageData(req.query);
    handleImageData.findOrCreateImage();

    try {
      const newImagePath: string = await handleImageData.saveFileToDisk();
      res.sendFile(newImagePath);
    } catch (error) {
      res.send(`Invalid input for filename`);
    }
  }
);

export default router;
