let total,diskon;
total = 1600000
diskon= 0

function hargafinal(total){
    if (total>1000000){
        diskon =15
    } else if (total>500000){
        diskon = 10
    }
    return (total*(diskon/100))
}

console.log(`Anda mendapat potongan harga ${hargafinal(total)} karena diskon ${diskon}%`);
console.log(`Total harga: ${total-hargafinal(total)}`);
