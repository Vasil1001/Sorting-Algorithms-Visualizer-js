async function partition(barsArray, low, high) {
    let i = (low - 1);

    barsArray[high].style.background = 'red';

    for (let j = low; j <= high - 1; j++) {
        barsArray[j].style.background = 'yellow';

        await new Promise(r => setTimeout(r, 50));

        if (parseInt(barsArray[j].style.height) < parseInt(barsArray[high].style.height)) {
            i++;
            swap(barsArray[i], barsArray[j]);

            barsArray[i].style.background = 'orange';
            await sleep(timeSleep);        } else {
            // color if not less than pivot
            barsArray[j].style.background = 'blue';
        }
    }
    i++;
    await new Promise(r => setTimeout(r, 50));
    swap(barsArray[i], barsArray[high])

    barsArray[high].style.background = 'blue';
    barsArray[low].style.background = 'green';

    await new Promise(r => setTimeout(r, 50));

    // color
    for (let k = 0; k < barsArray.length; k++) {
        if (barsArray[k].style.background != 'green')
            barsArray[k].style.background = 'green';
    }
    return i;
}

async function quickSort(barsArray, low, high) {
    // Algo name
    document.getElementById("algorithm_running").innerText = "Quick Sort";

    //Setting Time complexities
    document.getElementById("worst_time").innerText = "O(N^2)";
    document.getElementById("average_time").innerText = "Θ(N log N)";
    document.getElementById("best_time").innerText = "Ω(N log N)";

    //Setting Space complexity
    document.getElementById("space_complexity").innerText = "O(log N)";


    if (low < high) {
        let pivot_index = await partition(barsArray, low, high);
        await quickSort(barsArray, low, pivot_index - 1);
        await quickSort(barsArray, pivot_index + 1, high);
    } else {
        if (low >= 0 && high >= 0 && low < barsArray.length && high < barsArray.length) {
            barsArray[high].style.background = 'green';
            barsArray[low].style.background = 'green';
        }
    }
}

document.getElementById("quick_sort").addEventListener("click", async function () {
    let barsArray = document.querySelectorAll('.bar');
    let low = 0;
    let high = barsArray.length - 1;

    disableButtonsOnSortRun();
    await quickSort(barsArray, low, high);
    enableButtonsAfterSortRun();
});
