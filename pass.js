let password ="12345";
let salah = 0;
const prompt= require('readline')
while(salah<3){
    let user = prompt("masukan password")
    if(user==password){
        console.log("Anda berhasil login");
        salah=0;
    } else{
        console.log(`password anda salah, salah ${3-salah} lagi akun anda terkunci `)
        salah++;
    }

    if(salah==3){
        console.log("Akun anda terkunci, silakan hubungi admin untuk membuka");
        
    }
}