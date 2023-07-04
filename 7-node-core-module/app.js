const yargs = require("yargs");
const {
  simpanContact,
  listContact,
  detailContact,
  deleteContact,
} = require("./contacts");
// mengambil argumen dari comand line
yargs
  .command({
    command: "add",
    describe: "Menambahkan contact baru",
    builder: {
      nama: {
        describe: "Nama lengkap",
        demandOption: true,
        type: "string",
      },
      email: {
        describe: "Email",
        demandOption: false,
        type: "string",
      },
      noHP: {
        describe: "Nomor Handphone",
        demandOption: true,
        type: "string",
      },
    },
    handler(argv) {
      simpanContact(argv.nama, argv.email, argv.noHP);
    },
  })
  .demandCommand();

// menampilkan daftar semua nama & no HP contact
yargs.command({
  command: "list",
  describe: "Menampilkan semua nama $ no HP contact",
  handler() {
    listContact();
  },
});

// Menampilkan detail kontak
yargs.command({
  command: "detail",
  describe: "Menampilkan detail contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    detailContact(argv.nama);
  },
});

// menghapus contact berdasarkan nama
yargs.command({
  command: "delete",
  describe: "Menghapus contact berdasarkan nama",
  builder: {
    nama: {
      describe: "Nama lengkap",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    deleteContact(argv.nama);
  },
});

yargs.parse();

// const { simpanContact, tulisPertanyaan } = require("./contacts");

// // async await
// const main = async () => {
//   const nama = await tulisPertanyaan("Masukan nama anda :");
//   const email = await tulisPertanyaan("Masukan email anda :");
//   const noHP = await tulisPertanyaan("Masukan No HP anda :");

//   simpanContact(nama, email, noHP);
// };

// main();
