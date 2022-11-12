let random_array_100 = [];
createBarArray();


function createBarArray() {
    // Array to store randomly generated numbers
    random_array_100 = [];
    var numberOfBars = 0;
    let l = 100;

    // get a random number and add it to the array until there are 100 in array
    for (numberOfBars = 0; numberOfBars < l; numberOfBars++) {
        random_array_100.push(Math.round(Math.random() * l));
    }
    // print 100 random numbers of the array
    console.log(random_array_100);
    

     // select the div #bars element
     const bars = document.querySelector("#bars");
    // make bars with height from random array numbers
    for (let i = 0; i < random_array_100.length; i++) {
        // const para = document.createElement("div");
        // para.innerText = random_array_100[i];
        // document.body.appendChild(para);

        // create div bar for each number in the array
        const bar = document.createElement("div");
        bar.style.height = `${random_array_100[i]*2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deletePreviousArray() {
    document.getElementById(bars)
}

document.getElementById("new_array").addEventListener("click", function(){
    createBarArray();
});

