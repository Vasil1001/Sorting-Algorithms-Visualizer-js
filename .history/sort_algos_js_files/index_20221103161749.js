

function createBarArray() {
    // Array to store randomly generated numbers
    let random_array_100 = [];
    var numberOfBars = 0;
    let l = 100;

    // get a random number and add it to the array until there are 100 in array
    for (numberOfBars = 0; numberOfBars < l; numberOfBars++) {
        random_array_100.push(Math.round(Math.random() * l));
    }
    // print 100 random numbers of the array
    console.log(random_array_100);

    // 
    for (let i = 0; i < random_array_100.length; i++) {
        const bar = document.createElement("div");
        bar.innerText = random_array_100[i];
        document.bar.appendChild(bar);
    }
}

createBarArray();
