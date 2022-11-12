async function selectionSort() {
    console.log('bubble sort clicked');
    // get the bars from index
    const element = document.querySelectorAll(".bar");

    // One by one move boundary of unsorted subarray
    for (let i = 0; i < element.length - 1; i++) {
        console.log("In first i loop");
        // Find the minimum element in unsorted array
        let min_idx = i;
        //mark the smallest height in blue bar
        element[i].style.background = 'blue';

        for (j = i + 1; j < element.length; j++) {
            console.log("In j loop");
            element[j].style.background = 'blue';
            
            // Change color for the current comparision (in consideration for min_index)
            ele[j].style.background = 'red';

            if (parseInt(element[j].style.height) < parseInt(element[min_idx].style.height)) {
                console.log("If element 1 > element 2 swap them");
                await new Promise(r => setTimeout(r, 50));
                element[min_idx] = element[j];
            }
            swap(element[min_idx], element[i]);

            element[j].style.background = 'cyan';
        }
        element[element.length - 1 - i].style.background = 'green';
    }
    element[0].style.background = 'green';
}


document.getElementById("selection_sort").addEventListener("click", async function () {
    await selectionSort();
});