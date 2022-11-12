async function selectionSort() {

    //Setting Time complexities
    document.getElementById("worst_time").innerText="O(N^2)";
    document.getElementById("average_time").innerText = "Θ(N^2)";
    document.getElementById("best_time").innerText = "Ω(N)";

    //Setting Space complexity
    document.getElementById("space_complexity").innerText = "O(1)";
    
    console.log('bubble sort clicked');
    // get the bars from index
    const barsArray = document.querySelectorAll(".bar");

    // One by one move boundary of unsorted subarray
    for (let i = 0; i < barsArray.length; i++) {
        console.log("In first i loop");
        // Find the minimum barsArray in unsorted array
        let min_idx = i;
        //mark the smallest height in blue bar
        barsArray[i].style.background = 'blue';

        for (let j = i + 1; j < barsArray.length; j++) {
            console.log("In j loop");
            // Change color for the current comparision (in consideration for min_index)
            barsArray[j].style.background = 'red';

            await new Promise(r => setTimeout(r, 50));
            if (parseInt(barsArray[j].style.height) < parseInt(barsArray[min_idx].style.height)) {
                console.log("If barsArray 1 < current smallest barsArray change current smalest");
                if (min_idx !== i) {
                    //  there is a new minimum so change last to normal cyan
                    barsArray[min_idx].style.background = 'cyan';
                }
                min_idx = j;
            }
            else {
                barsArray[j].style.background = 'cyan';
            }
        }
        await new Promise(r => setTimeout(r, 50));
        swap(barsArray[min_idx], barsArray[i]);

        // color mid index blue after reset as it has been swapped
        barsArray[min_idx].style.background = 'cyan';

        // change the sorted bar color to green
        barsArray[i].style.background = 'green';
    }
}


document.getElementById("selection_sort").addEventListener("click", async function () {
    disableButtonsOnSortRun();
    await selectionSort();
    enableButtonsAfterSortRun();

});