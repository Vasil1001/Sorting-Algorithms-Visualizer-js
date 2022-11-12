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

        while (j >= 0 && element[j].style.height) {
            console.log("In j loop");
            element[j].style.background = ''
            element[j + 1].style.height = element[j].style.height;
            j = j - 1;
        }

        for (j = 0; j < element.length - i - 1; j++) {
            console.log("In j loop");
            element[j].style.background = 'blue';
            element[j + 1].style.background = 'blue';

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


document.getElementById("insertion_sort").addEventListener("click", async function () {
    disableButtonsOnSortRun();
    await insertionSort();
    enableButtonsAfterSortRun();

});

for (int i = 1; i < length; i++) {
    int j = i - 1;
    int temp = array[i];
    chartTracer.select(i);
    Tracer.delay();
    logTracer.printf("insert %s\n",temp);
    while (j >= 0 && array[j] > temp) {
        array[j + 1] = array[j];
        chartTracer.patch(j + 1, array[j + 1]);
        Tracer.delay();
        chartTracer.depatch(j + 1);
        j--;
    }
    array[j + 1] = temp;
    chartTracer.patch(j + 1, temp);
    Tracer.delay();
    chartTracer.depatch(j + 1);
    chartTracer.deselect(i);
}