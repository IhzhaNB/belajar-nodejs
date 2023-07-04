function cetakNama(nama) {
  return `Hi, Nama saya ${nama}`;
}

const PI = 3.14;

const mahasiswa = {
  nama: "Nauval Baihaqqi",
  umur: 22,
  cetakMhs() {
    return `Halo, nama saya ${this.nama}, dan umr saya ${this.umur} tahun`;
  },
};

class Orang {
  constructor() {
    console.log("Objek Orang telah dibuat!");
  }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI = PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

module.exports = { cetakNama, PI, mahasiswa, Orang };
