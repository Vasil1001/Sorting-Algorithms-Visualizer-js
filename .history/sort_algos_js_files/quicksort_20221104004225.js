async function quickSort() {
    console.log('quicksort clicked');
    // get the bars from index
    const barsArray = document.querySelectorAll(".bar");
    barsArray[0].style.background = 'green';

    let pivot = barsArray
    for (let i = 1; i < barsArray.length; i++) {
        console.log("In first i loop");

        let key = barsArray[i].style.height;
        let j = i - 1;

        barsArray[i].style.background = 'blue';

        await new Promise(r => setTimeout(r, 50));

        while (j >= 0 && (parseInt(barsArray[j].style.height) > parseInt(key))) {
            console.log("In j loop");
            barsArray[j].style.background = 'blue';
            barsArray[j + 1].style.height = barsArray[j].style.height;
            j--;

            await new Promise(r => setTimeout(r, 50));

            // color sorted side
            for (let k = i; k >= 0; k--) {
                barsArray[k].style.background = 'yellow';
            }
        }
        barsArray[j + 1].style.height = key;
        barsArray[i].style.background = 'yellow';

    }
}

async function partition(barsArray, low, high) {
    let i = (low - 1);

    barsArray[high].style.background = 'red';

    for (let j = low; j<= high -1; j++){
        barsArray[j].style.background = 'yellow';

        await new Promise(r => setTimeout(r, 50));

        if(parseInt(barsArray[j].style.height) < parseInt(barsArray[high].style.height)) {
            i++;
            swap(barsArray[i], barsArray[j]);

            barsArray[i].style.background = 'orange';
            await new Promise(r => setTimeout(r, 50));


        } else{
            // color if not less than pivot
            barsArray[j].style.background = 'pink';
        }
    }
    i++;
    await new Promise(r => setTimeout(r, 50));

}

async function quickSort(barsArray, low, high) {
    if (low < high) {
        let pivot_index = await partition(barsArray, low, high);
        await quickSort(barsArray, low, pivot_index - 1);
        await quickSort(barsArray, pivot_index + 1, high);
    }
    else {
        if (low >= 0 && high >= 0 && low < barsArray.length && high < barsArray.length) {
            barsArray[high].style.background = 'green';
            barsArray[low].style.background = 'green';
        }
    }
}

document.getElementById("quick_sort").addEventListener("click", async function () {
    disableButtonsOnSortRun();
    await quickSort();
    enableButtonsAfterSortRun();

});
