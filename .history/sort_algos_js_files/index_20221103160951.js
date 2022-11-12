
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
    const para = document.createElement("h1");
    para.innerText = "This is a paragraph";
    document.body.appendChild(para);
}
}

// function createNewArray(numberOfBars = 60) {
    
//     // deleteChild();

//     //get a random number and add it to the array until there are 100 in array
//     for (var numberOfBars = 0, l = 100; numberOfBars < l; numberOfBars++) {
//         arr.push(Math.round(Math.random() * l))
//     }
//     console.log(arr);
//     // select the div #bars element
//     const bars = document.querySelector("#bars");

//     // create multiple element div using loop and adding class 'bar col'
//     for (let i = 0; i < numberOfBars; i++) {
//         const bar = document.createElement("div");
//         bar.style.height = `${array[i] * 2}px`;
//         bar.classList.add('bar');
//         bar.classList.add('flex-item');
//         bar.classList.add(`barNo${i}`);
//         bars.appendChild(bar);
//     }
// }

// // Helper function to delete all the previous bars so that new can be added
// function deleteChild() {
//     const bar = document.querySelector("#bars");
//     bar.innerHTML = '';
// }

// // Selecting newarray button from DOM and adding eventlistener
// const newArray = document.querySelector(".new_array");
// newArray.addEventListener("click", function(){
//     console.log("From newArray " + arraySize.value);
//     console.log("From newArray " + delay);
//     enableSortingBtn();
//     enableSizeSlider();
//     createNewArray(arraySize.value);
// });