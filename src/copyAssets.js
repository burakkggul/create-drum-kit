const fs = require("fs");

const path = require("path");

function catchError(err) {
  if (err) throw err;
}

module.exports = function () {
  fs.mkdirSync(
    process.cwd() + "/drumanilla/assets",
    { recursive: true },
    catchError
  );
  fs.mkdirSync(
    process.cwd() + "/drumanilla/sounds",
    { recursive: true },
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/index.html",
    process.cwd() + "/drumanilla/index.html",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/assets/index.js",
    process.cwd() + "/drumanilla/assets/index.js",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/assets/index.css",
    process.cwd() + "/drumanilla/assets/index.css",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/assets/background.jpg",
    process.cwd() + "/drumanilla/assets/background.jpg",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/sounds/boom.wav",
    process.cwd() + "/drumanilla/sounds/boom.wav",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/sounds/clap.wav",
    process.cwd() + "/drumanilla/sounds/clap.wav",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/sounds/hihat.wav",
    process.cwd() + "/drumanilla/sounds/kick.wav",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/sounds/openhat.wav",
    process.cwd() + "/drumanilla/sounds/openhat.wav",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/sounds/ride.wav",
    process.cwd() + "/drumanilla/sounds/ride.wav",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/sounds/snare.wav",
    process.cwd() + "/drumanilla/sounds/snare.wav",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/sounds/tink.wav",
    process.cwd() + "/drumanilla/sounds/tink.wav",
    catchError
  );
  fs.copyFile(
    __dirname + "/../statics/sounds/tom.wav",
    process.cwd() + "/drumanilla/sounds/tom.wav",
    catchError
  );
};
