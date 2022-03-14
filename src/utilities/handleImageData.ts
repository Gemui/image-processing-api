import sharp from 'sharp';
import path from 'path';
import { promises as fs } from 'fs';

class HandleImageData {
  public imageName: string;
  private width = 0;
  private height = 0;
  private file: sharp.Sharp = sharp();
  private rotate = 0;
  private requestQuery: qs.ParsedQs;
  private readonly imagePath: string = './assets/images';

  constructor(requestQuery: qs.ParsedQs) {
    this.requestQuery = requestQuery;
    this.imageName = this.requestQuery.filename as unknown as string;
  }

  public findOrCreateImage(): sharp.Sharp {
    this.file = sharp(
      path.resolve(this.imagePath, `full`, `${this.requestQuery.filename}`)
    );

    this.rotateImage().resizeImage();

    return this.file;
  }

  public async saveFileToDisk(): Promise<string> {
    const newImagePath = path.resolve(
      this.imagePath,
      'thumb',
      `${this.imageName}`
    );
    let imageBuffer: Buffer;
    try {
      imageBuffer = await fs.readFile(newImagePath);
    } catch (error) {
      imageBuffer = await this.file.toBuffer();
    }

    await fs.writeFile(newImagePath, imageBuffer);

    return newImagePath;
  }

  private resizeImage(): HandleImageData {
    if (this.requestQuery.width && this.requestQuery.height) {
      this.height = this.getAsNumber(this.requestQuery.height);
      this.width = this.getAsNumber(this.requestQuery.width);
      this.imageName = `${this.requestQuery.width}-${this.requestQuery.height}-${this.imageName}`;

      this.file.resize(+this.width, +this.height);
    }
    return this;
  }

  private rotateImage(): HandleImageData {
    if (this.requestQuery.rotate) {
      this.rotate = this.getAsNumber(this.requestQuery.rotate);

      this.file.rotate(+this.rotate);

      this.imageName = `${this.rotate}-${this.imageName}`;
    }
    return this;
  }

  private getAsNumber(
    word: string | string[] | qs.ParsedQs | qs.ParsedQs[]
  ): number {
    return word as unknown as number;
  }
}

export default HandleImageData;
