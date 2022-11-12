async function bubbleSort() {

    //Setting Time complexities
    document.getElementById("worst_time").innerText="O(N^2)";
    document.getElementById("average_time").innerText="Θ(N^2)";
    document.getElementById("Time_Best").innerText="Ω(N)";

    //Setting Space complexity
    document.getElementById("Space_Worst").innerText="O(1)";

    console.log('bubble sort clicked');
    // get the bars from index
    const barsArray = document.querySelectorAll(".bar");

    for (let i = 0; i < barsArray.length - 1; i++) {
        console.log("In first i loop");

        for (j = 0; j < barsArray.length - i - 1; j++) {
            console.log("In j loop");
            barsArray[j].style.background = 'blue';
            barsArray[j + 1].style.background = 'blue';

            if (parseInt(barsArray[j].style.height) > parseInt(barsArray[j + 1].style.height)) {
                console.log("If barsArray 1 > barsArray 2 swap them");
                await new Promise(r => setTimeout(r, 50));
                swap(barsArray[j], barsArray[j + 1]);
            }
            barsArray[j].style.background = 'cyan';
            barsArray[j + 1].style.background = 'cyan';
        }
        barsArray[barsArray.length - 1 - i].style.background = 'pink';
    }
    barsArray[0].style.background = 'pink';
}


document.getElementById("bubble_sort").addEventListener("click", async function () {
    disableButtonsOnSortRun();
    await bubbleSort();
    enableButtonsAfterSortRun();

});