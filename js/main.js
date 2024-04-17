alert("Calcoliamo il prezzo del tuo biglietto")

const kiloMetri = prompt("Quanti kilometri da percorrere?")

const prezzo = kiloMetri * 0.21;

 console.log(prezzo);

 const età = prompt("Dicci quanti anni hai per ottenere uno sconto");

console.log(età)

let sconto = 1

if(età<18) {

 sconto = 0.80;


} else if(età>65) {

 sconto = 0.60;

} else {

sconto = 1

}

console.log(sconto);

let prezzoScontato = prezzo * sconto;

let n = prezzoScontato.toFixed(2);

console.log(prezzoScontato);

console.log(n);

document.getElementById("price").innerHTML = n;