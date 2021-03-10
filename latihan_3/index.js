// // Nama: Soumay, Edson Robert

// //1. Class
// class Orang{
//      constructor(nama, umur){
//          this.nama = nama;
//          this.umur = umur;
//      }
//      bekerja(){
//          console.log(`${this.nama} sedang bekerja seperti biasa`);
//      }
// }

// let user1 = new Orang('edson', 20);
// console.log(user1.bekerja());


// //2. Inheritance
// class Orang{
//     constructor(nama, umur){
//         this.nama = nama;
//         this.umur = umur;
//     }
//     tidur(){
//         console.log (`${this.nama} sedang tidur`);
//     }
//     makan(){
//         console.log (`${this.nama} sedang makan`);
//     }
// } 

// class Pelajar extends Orang{
//     constructor(nama, umur, namaSekolah){
//         super(nama, umur);
//         this.namaSekolah = namaSekolah;
//     }
//     belajar(){
//        console.log(`${this.nama} belajar di ${this.namaSekolah}`);
//     }
// }

// let user = new Pelajar('Jhon', 17, 'Unklab'); 
// console.log(user);
// user.belajar();
// user.tidur();
// user.makan();

