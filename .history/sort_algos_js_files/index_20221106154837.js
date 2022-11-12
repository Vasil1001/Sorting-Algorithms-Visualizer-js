let random_array_100 = [];

// Create a bar array according to the slider value
var arr_size = document.querySelector("#arr_sz"); //select bars slider

arr_size.addEventListener("input",function(){
    createBarArray(parseInt(arr_size.value));
});

// Change speed of bars
function 


createBarArray();

function createBarArray(no_of_bars = 60) {
    // replace array 
    deletePreviousArray();

    // Array to store randomly generated numbers
    random_array_100 = [];
    
    // get a random number and add it to the array until there are 100 in array
    for (let singleBar = 0; singleBar < no_of_bars; singleBar++) {
        random_array_100.push(Math.floor(Math.random() * 250) + 1);
    }

    // print 100 random numbers of the array
    console.log(random_array_100);

    // select the div #bars element
    const bars = document.querySelector("#bars");

    // make bars with height from random array numbers
    for (let i = 0; i < no_of_bars; i++) {
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

// TAP Randomize Bars button to create a new array of bars
document.getElementById("new_array").addEventListener("click", function () {
    createBarArray(arr_sz.value);
});

function swap(element1, element2) {
    //https://www.geeksforgeeks.org/bubble-sort/
    let temp = element1.style.height;
    element1.style.height = element2.style.height;
    element2.style.height = temp;
}

// disable all the buttons or if button is pressed again algo will bug out
function disableButtonsOnSortRun() {
    document.getElementById("new_array").disabled = true;

    document.getElementById("arr_sz").disabled = true;

    document.getElementById("bubble_sort").disabled = true;
    document.getElementById("selection_sort").disabled = true;
    document.getElementById("insertion_sort").disabled = true;
    document.getElementById("quick_sort").disabled = true;
}

function enableButtonsAfterSortRun() {
    document.getElementById("new_array").disabled = false;

    document.getElementById("arr_sz").disabled = false;

    document.getElementById("bubble_sort").disabled = false;
    document.getElementById("selection_sort").disabled = false;
    document.getElementById("insertion_sort").disabled = false;
    document.getElementById("quick_sort").disabled = false;
}
