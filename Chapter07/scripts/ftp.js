require('dotenv').config({path: '.env.node'});
const Client = require('ftp');
const fs = require('fs');
const path = require('path');
const recursive = require("recursive-readdir");

let folders = [
  'css',
  'js',
  'fonts'
];

if (process.env.FTP_SKIP_IMAGES == 0) {
  folders.push('images');
}

let local_dir_base = 'public';
let remote_dir_base = process.env.FTP_REMOTE_DIR || '';

function ignoreFunc(file) {
  let inFolder = false;
  folders.forEach((folder) => {
    if (file.indexOf(folder) > -1) {
      inFolder = true;
    }
  });
  return !inFolder;
}

recursive(local_dir_base, [ignoreFunc], (err, files) =>{

  const c = new Client();

  c.on('ready', () => {

    let promises = files.map(
      (file) => {
        return new Promise((resolve, reject) => {
          let remote_file = file.replace(local_dir_base, remote_dir_base);
          c.mkdir(path.dirname(remote_file), true, () => {
            c.put(file, remote_file, (err) => {
              if (err) {
                reject(err);
              } else {
                console.log(`${file} successfully deployed.`);
                resolve();
              }
            });
          });
        });
      }
    );

    Promise.all(promises)
      .then(() => {
        console.log('Completed FTP deployment successfully.');
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        c.end();
        process.exit();
      })
    ;
  });

  c.connect({
    host: process.env.FTP_HOST,
    user: process.env.FTP_USER,
    password: process.env.FTP_PWD
  });

});
