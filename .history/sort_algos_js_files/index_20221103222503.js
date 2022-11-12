let random_array_100 = [];
createBarArray();

function createBarArray() {
    // replace array 
    deletePreviousArray()

    // Array to store randomly generated numbers
    random_array_100 = [];
    var numberOfBars = 0;
    let l = 17;

    // get a random number and add it to the array until there are 100 in array
    for (numberOfBars = 0; numberOfBars < l; numberOfBars++) {
        random_array_100.push(Math.round(Math.random() * l * 6));
    }
    // print 100 random numbers of the array
    console.log(random_array_100);


    // select the div #bars element
    const bars = document.querySelector("#bars");
    // make bars with height from random array numbers
    for (let i = 0; i < random_array_100.length; i++) {
        // create div bar for each number in the array
        const bar = document.createElement("div");
        bar.style.height = `${random_array_100[i] * 2}px`;
        bar.classList.add('bar');
        bar.classList.add('flex-item');
        bar.classList.add(`barNo${i}`);
        bars.appendChild(bar);
    }
}

function deletePreviousArray() {
    const bar = document.querySelector("#bars");
    bar.innerHTML = '';
}

document.getElementById("new_array").addEventListener("click", function () {
    createBarArray();
});

function swap(element1, element2) {
    //https://www.geeksforgeeks.org/bubble-sort/
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}


function disableButtonsOnSortRun() {
    document.getElementById("bubble_sort").sort
}