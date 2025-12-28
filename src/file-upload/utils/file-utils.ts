import sharp from 'sharp';
import * as mkdirp from 'mkdirp';
import * as path from 'path';

export const ImageSave  = async (
    file: Express.Multer.File,
    folderName: string,
) => {
    const dest = path.join(process.cwd(), 'uploads', folderName);
    mkdirp.sync(dest);

    const safeDate = new Date().toISOString().replace(/:/g, '-');
    const fileName = `${safeDate}-${file.originalname}`;
    const fullPath = path.join(dest, fileName);

    try {
        await sharp(file.buffer).toFile(fullPath);
        return "image saved successfully";
    } catch (e) {
        return e.toString();
    }
};
