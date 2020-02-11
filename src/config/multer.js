const multer = require('multer'),
      path = require('path'),
      crypto = require('crypto');

module.exports = {
  dest: path.resolve(__dirname, '..', '..', 'tmp', 'uploads'),
  storage: multer.diskStorage({
    destination: ( req, file, cb) =>{
      cb( null, path.resolve(__dirname, '..', '..', 'tmp', 'uploads'))
    },
    filename: (req, file, cb) =>{
      crypto.randomBytes(16, (err, hash) => {
        if (err) cb(err);

        file.key = `${hash.toString('hex')}-${file.originalname}`;

        cb(null, file.key);
      })
    }
  }),
  limits: {
    fileSize: 2 * 1024 * 1024
  },
  // fileFilter: (req, file, cb) =>{
  //   const allowedMimes = [
  //     'image/jpeg',
  //     'image/pjepg',
  //     'image/png',
  //     'image/gif',
  //   ];

  //   if (allowedMimes.includes(file.mimeType)) {
  //     cb( null, true);
  //   } else {
  //     cb( new Error ('invalid file type'))
  //   }
  // }
}