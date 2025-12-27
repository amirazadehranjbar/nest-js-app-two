import sharp from 'sharp';
import * as mkdirp from 'mkdirp';

export const ImageSave = async (file: Express.Multer.File , folderName:string) => {

    const dest :string ="uploads/" + folderName;
    const fileName : string =new Date().toISOString() + "--" + file.originalname;

    mkdirp.sync(dest);

    await sharp(file.buffer).toFile(dest + fileName);


}