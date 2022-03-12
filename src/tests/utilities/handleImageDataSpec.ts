import HandleImageData from '../../utilities/handleImageData';
import sizeOf from 'image-size';

describe('Test handleImageData class methods and output ', () => {
  it('Test image name to save with resize 200 * 200 should be : 200-200-encenadaport.jpg', async () => {
    const parsingData = {
      filename: 'encenadaport.jpg',
      width: '200',
      height: '200'
    } as qs.ParsedQs;

    const imageData: HandleImageData = new HandleImageData(parsingData);
    imageData.findOrCreateImage();
    expect(imageData.imageName).toEqual('200-200-encenadaport.jpg');
  });

  it('Test save image and resizing that should equal 200 * 200 ', async () => {
    const parsingData = {
      filename: 'encenadaport.jpg',
      width: '200',
      height: '200'
    } as qs.ParsedQs;

    const handleImageData: HandleImageData = new HandleImageData(parsingData);

    handleImageData.findOrCreateImage();
    const filePath: string = await handleImageData.saveFileToDisk();
    const imageDiemnsions = sizeOf(filePath);

    expect(imageDiemnsions.width).toEqual(200);
    expect(imageDiemnsions.height).toEqual(200);
  });

  it('Test all class feature (resize - rotate - save to desk) image name  should be : 200-200-90-encenadaport.jpg ', async () => {
    const parsingData = {
      filename: 'encenadaport.jpg',
      width: '200',
      height: '200',
      rotate: '90'
    } as qs.ParsedQs;

    const handleImageData: HandleImageData = new HandleImageData(parsingData);

    handleImageData.findOrCreateImage();
    const filePath: string = await handleImageData.saveFileToDisk();
    const imageDiemnsions = sizeOf(filePath);
    expect(handleImageData.imageName).toEqual('200-200-90-encenadaport.jpg');

    expect(imageDiemnsions.width).toEqual(200);
    expect(imageDiemnsions.height).toEqual(200);
  });
});
