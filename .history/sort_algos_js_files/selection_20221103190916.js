async function selectionSort() {
    console.log('bubble sort clicked');
    // get the bars from index
    const element = document.querySelectorAll(".bar");

    // One by one move boundary of unsorted subarray
    for (let i = 0; i < element.length - 1; i++) {
        console.log("In first i loop");
        // Find the minimum element in unsorted array

        for (j = 0; j < element.length - i - 1; j++) {
            element[j].style.background = 'blue';
            element[j + 1].style.background = 'blue';
            console.log("In j loop");

            if (parseInt(element[j].style.height) > parseInt(element[j + 1].style.height)) {
                console.log("If element 1 > element 2 swap them");
                await new Promise(r => setTimeout(r, 50));
                swap(element[j], element[j + 1]);
            }
            element[j].style.background = 'cyan';
            element[j + 1].style.background = 'cyan';
        }
        element[element.length - 1 - i].style.background = 'green';
    }
    element[0].style.background = 'green';
}


document.getElementById("bubble_sort").addEventListener("click", async function () {
    await bubbleSort();
});