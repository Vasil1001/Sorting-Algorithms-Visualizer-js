async function quickSort() {
    console.log('quicksort clicked');
    // get the bars from index
    const barsArray = document.querySelectorAll(".bar");
    barsArray[0].style.background = 'green';

    let pivot = barsArray
    for (let i = 1; i < barsArray.length; i++) {
        console.log("In first i loop");
        
        let key = barsArray[i].style.height;
        let j = i -1;
        
        barsArray[i].style.background = 'blue';

        await new Promise(r => setTimeout(r, 50));

        while (j >= 0 && (parseInt(barsArray[j].style.height) > parseInt(key))) {
            console.log("In j loop");
            barsArray[j].style.background = 'blue';
            barsArray[j + 1].style.height = barsArray[j].style.height;
            j--;

            await new Promise(r => setTimeout(r, 50));

            // color sorted side
            for(let k = i; k >= 0; k--){
                barsArray[k].style.background = 'yellow';
            }
        }
        barsArray[j + 1].style.height = key;
        barsArray[i].style.background = 'yellow';

    }
}

async function partition(barsArray, low, high) {

}

async function quickSort(barsArray, low, high){
    if(low < r){
        let pivot_index = await partitionLomuto(ele, l, r);
        await quickSort(ele, l, pivot_index - 1);
        await quickSort(ele, pivot_index + 1, r);
    }
    else{
        if(l >= 0 && r >= 0 && l <ele.length && r <ele.length){
            ele[r].style.background = 'green';
            ele[l].style.background = 'green';
        }
    }
}

document.getElementById("quick_sort").addEventListener("click", async function () {
    disableButtonsOnSortRun();
    await quickSort();
    enableButtonsAfterSortRun();

});