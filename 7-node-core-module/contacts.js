const fs = require("fs");
const chalk = require("chalk");
const validator = require("validator");

// membuat folder data
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file contacts.json jika belum ada
const dataPath = "./data/contacts.json";
if (!fs.existsSync(dataPath)) {
  fs.writeFileSync(dataPath, "[]", "utf-8");
}

const loadContact = () => {
  const fileBuffer = fs.readFileSync("data/contacts.json", "utf-8");
  const contacts = JSON.parse(fileBuffer);
  return contacts;
};

simpanContact = (nama, email, noHP) => {
  const contact = { nama, email, noHP };
  const contacts = loadContact();

  // cek duplikat nama
  const duplikat = contacts.find((contact) => contact.nama === nama);
  if (duplikat) {
    console.log(
      chalk.red("contact sudah terdaftar, silahkan gunakan nama lain")
    );
    return false;
  }

  // cek Email
  if (email) {
    if (!validator.isEmail(email)) {
      console.log(chalk.red("Email tidak valid!"));
      return false;
    }
  }

  // cek No HP
  if (!validator.isMobilePhone(noHP, "id-ID")) {
    console.log(chalk.red("Nomor HP tidak valid!"));
    return false;
  }

  contacts.push(contact);

  fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));

  console.log(chalk.green("terimakasih sudah mengisi Form kontak"));
};

const listContact = () => {
  const contacts = loadContact();
  console.log(chalk.blue("Daftar contact : "));
  contacts.forEach((contact, i) => {
    console.log(`${i + 1}. ${contact.nama} - ${contact.noHP}`);
  });
};

const detailContact = (nama) => {
  const contacts = loadContact();

  const contact = contacts.find(
    (contact) => contact.nama.toLowerCase() === nama.toLowerCase()
  );

  if (!contact) {
    console.log(chalk.red(`${nama} tidak ditemukan!`));
    return false;
  }
};

const deleteContact = (nama) => {
  const contacts = loadContact();

  const newContacts = contacts.filter(
    (contact) => contact.nama.toLowerCase() !== nama.toLowerCase()
  );

  if (contacts.length === newContacts.length) {
    console.log(chalk.red(`${nama} tidak ditemukan!`));
    return false;
  }

  fs.writeFileSync("data/contacts.json", JSON.stringify(newContacts));

  console.log(chalk.green(`${nama} berhasil dihapus!`));
};

module.exports = { simpanContact, listContact, detailContact, deleteContact };
