// const fs = require('fs'); // core module
// const cetakNama = require("./try"); // local module
// const moment = require('moment'); // third party module / npm module / node_module

const coba = require("./try");

// console.log("Hello Ihzha");
// console.log(cetakNama("Ihzha Nauval"));
console.log(
  coba.cetakNama("Ihzha"),
  coba.PI,
  coba.mahasiswa.cetakMhs(),
  new coba.Orang()
);
