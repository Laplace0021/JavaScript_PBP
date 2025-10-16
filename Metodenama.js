// const userProfile = {
//   // Properti dan Nilai
//   firstName: "Budi",
//   lastName: "Santoso",
//   age: 30,
//   email: "budi.santoso@example.com",
//   isActive: true,

//   // Metode (Function sebagai properti)
//   getFullName: function() {
//     return this.firstName + " " + this.lastName;
//   },

//   // Metode menggunakan shorthand ES6
//   greet() {
//     return "Halo, saya " + this.getFullName() +".";
//   }

// };

// userProfile.firstName = "Roni"
// userProfile.lastName = "Sahroni"
// userProfile.phoneNumber= 
// "080209271248"
// console.log("Nama Lengkap:", userProfile.getFullName());
// console.log("Usia:", userProfile.age);
// console.log("Nomor HP:", userProfile.phoneNumber);
// console.log("Status Aktif:", userProfile.isActive);
// console.log(userProfile.greet());      
// delete userProfile.lastName;
// console.log(userProfile); //last name sudah tidak ada
// console.log(userProfile.lastName); //akan return undefined karena property last name tidak ada

// const keyPrefix = "id_";
// const userId = 1001;
// const keyDinamic = "alamat-user";

// const userData={
//   [keyPrefix + "user"]: userId,
//   [keyDinamic] : "Jl. Sudirman No. 12"
// };
// console.log(userData);


// function buatPemain(nama,skor){
//   return{
//     nama,skor,
//     tambahSkor(poin){
//       this.skor += poin;
//     }
//   };
// }

// const pemain1 =buatPemain("Doni",50);
// pemain1.tambahSkor(10);
// console.log(pemain1.skor);

// Deklarasi dan Inisialisasi Objek Karyawan menggunakan Object Literal
const karyawan = {
    // Properti (key-value pairs)
    namaLengkap: "Alex Chandra",
    jabatan: "Web Developer",
    aktif: true, 
    tahunBergabung: 2022,

    // Metode (fungsi di dalam objek)
    sapa: function() {
        return "Halo! Saya " + this.namaLengkap + ", " + this.jabatan + ".";
    },

    // Shorthand method syntax (ES6+)
    masaKerja(tahunSekarang) {
        return console.log("Masa Kerja",tahunSekarang - this.tahunBergabung,"tahun");
    }
};

const { namaLengkap, jabatan } = karyawan;
console.log(namaLengkap); // Output: Alex Chandra
console.log(jabatan);   // Output: Web Developer
console.log(karyawan.sapa());

console.log(karyawan.masaKerja(2025));
