// // let elements = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Grapes', 'Pineapple'];


// // let vowelsArray = [];


// // let consonantsArray = [];


// // for (let i = 0; i < elements.length; i++) {
    
// //     let firstLetter = elements[i][0].toUpperCase();
    
    
// //     if ('AEIOU'.includes(firstLetter)) {
// //         vowelsArray.push(elements[i]);
// //     } else {
// //         consonantsArray.push(elements[i]);
// //     }
// // }


// // alert("Unli harf bilan boshlanadigan so'zlar: " + vowelsArray.join(', '));
// // alert("Undosh harf bilan boshlanadigan so'zlar: " + consonantsArray.join(', '));



// // let cars = ['Apple', 'Banana', 'Orange', 'Kiwi', 'Grapes', 'Pineapple'];

// // cars.forEach(item => {
// //     console.log(item);
// // })



// var array = ["Terminator", "Truck", "Banana", "Cars", "Tailwind" ];


// for (var i = 0; i < 10; i++) {
    
//     var randomCharCode = Math.floor(Math.random() * (90 - 65 + 1)) + 65;
    
//     var randomChar = String.fromCharCode(randomCharCode);
    
//     array.push(randomChar);
// }


// var result = array.filter(function(element) {
//     return element === 'T';
// });


// alert("Array ichida 'T' bilan boshlangan elementlar: " + result);


let x = prompt(`Birinchi sonni kiriting`)
let y = prompt(`Ikkinchi sonni kiriting`)


function kattaChiqarish(x, y) {
    if (x > y) {
      alert(x + " eng katta!");
    } else if (y > x) {
      alert(y + " eng katta!");
    } else {
      alert("Ikkalasi ham teng!");
    }
  }
  
  // Misol qilish:
  kattaChiqarish(10, 5); // Bu holatda alertda "10 eng katta!" chiqadi.
  kattaChiqarish(3, 9); // Bu holatda alertda "9 eng katta!" chiqadi.
  kattaChiqarish(7, 7); // Bu holatda alertda "Ikkalasi ham teng!" chiqadi.
  