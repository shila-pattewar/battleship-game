// create object literals
    const ussAssembly = {
        hull: 20,
        firepower: 5,
        accuracy: 0.7
    }

// The alien ships should each have the following ranged properties determined randomly
  
    function generateAlienShip(){
        return {
            hull: Math.floor(Math.random() * (6 - 3 + 1)) + 3, 
            firepower: Math.floor(Math.random() * (4 - 2 + 1)) + 2, 
            accuracy: Math.random() * (0.8 - 0.6) + 0.6
        };
        
    }
      //  console.log(generateAlienShip()); // shows all ramdom alianship properties ie hull firepower and accuracy

        const alienShips = [];
        for (let i = 0; i <= 5; i++) {     // generate 6 alienships
            alienShips.push(generateAlienShip());
        }
        //console.log(alienShips);  // shows all six alianships
        console.log(alienShips[0]);  // shows only 1st alianship

//You could be battling six alien ships each with unique values.
//Example use of accuracy to determine a hit:
//You attack the first alien ship i.e. alienShips[0]

    if (Math.random() < alienShips[0].accuracy) {
        console.log('You have been hit!');
    }
    else{
        console.log("you survive");
    }