import express from 'express';
import imageMiddleware from '../../utilities/imageMiddleware';
import HandleImageData from '../../utilities/handleImageData';
const router = express();

router.get('/', imageMiddleware, async (req, res) => {
  const handleImageData: HandleImageData = new HandleImageData(req.query);
  handleImageData.findOrCreateImage();

  try {
    const newImagePath: string = await handleImageData.saveFileToDisk();
    res.sendFile(newImagePath);
  } catch (error) {
    res.send('invalid image name');
  }
});

export default router;
