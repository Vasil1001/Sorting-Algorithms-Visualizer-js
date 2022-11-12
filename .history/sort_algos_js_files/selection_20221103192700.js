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

        for (let j = i + 1; j < element.length; j++) {
            console.log("In j loop");
            // Change color for the current comparision (in consideration for min_index)
            element[j].style.background = 'red';

            await new Promise(r => setTimeout(r, 50));
            if (parseInt(element[j].style.height) < parseInt(element[min_idx].style.height)) {
                console.log("If element 1 < current smallest element change current smalest");
                if (min_idx !== i) {
                    //  there is a new minimum so change last to normal cyan
                    element[min_idx].style.background = 'cyan';
                }
                min_idx = j;
            }
            else {
                element[j].style.background = 'cyan';
            }
        }
        await new Promise(r => setTimeout(r, 50));
        swap(element[min_idx], element[i]);

        // color mid index blue after reset as it has been swapped
        element[min_index].style.background = 'cyan';

        // change the sorted bar color to green
        element[i].style.background = 'green';
    }
}


document.getElementById("selection_sort").addEventListener("click", async function () {
    await selectionSort();
});