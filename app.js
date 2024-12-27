// create object literals
const ussAssembly = {
    hull: 20,
    firepower: 5,
    accuracy: 0.7
}

// The alien ships should each have the following ranged properties determined randomly

// function generateAlienShip() {
//     return {
//       hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3 
//     };
//   }
  
// const alienShips = [];
// for (let i = 0; i <= 5; i++) {
//     alienShips.push(generateAlienShip());
// }
  
// console.log(alienShips); 

function generateAlienShip(){
    return {
        hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3, 
        firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2, 
        accuracy: Math.random() * (0.8 - 0.6) + 0.6
    };
    
    }
    console.log(generateAlienShip());
