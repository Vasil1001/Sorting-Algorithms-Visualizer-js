async function insertionSort() {
    console.log('bubble sort clicked');
    // get the bars from index
    const element = document.querySelectorAll(".bar");
    element[0].style.background = 'green';

    for (let i = 1; i < element.length; i++) {
        console.log("In first i loop");
        
        let key = element[i].style.height;
        let j = i -1;
        
        element[i].style.background = 'blue';

        await new Promise(r => setTimeout(r, 50));

        while (j >= 0 && (parseIntelement[j].style.height) {
            console.log("In j loop");
            element[j].style.background = 'blue';
            element[j + 1].style.height = element[j].style.height;
            j = j - 1;

            await new Promise(r => setTimeout(r, 50));

            // color sorted side
            for(let k = i; k >= 0; k--){
                element[k].style.background = 'green';
            }
        }
        element[j + 1].style.height = key;
        element[i].style.background = 'green';

    }
}


document.getElementById("insertion_sort").addEventListener("click", async function () {
    disableButtonsOnSortRun();
    await insertionSort();
    enableButtonsAfterSortRun();

});
