async function bubbleSort() {
    console.log('bubble sort clicked');

    const element = document.querySelectorAll('.bar');

    for (let i = 0; i < element.length - 1; i++) {
        console.log("In first i loop");
        for (j = 0; j < n - i - 1; j++) {
            console.log("In j loop");
            element[j].style.background = 'blue';
            element[j + 1].style.background = 'blue';

            if (element[j].style.height > element[j + 1].style.height) {
                console.log("If element 1 > element 2 swap them");
                await new Promise(resolve => setTimeout(() => {resolve(), delay(2)}));
                swap(element[j], element[j + 1]);
            }
            element[j].style.background = 'cyan';
            element[j + 1].style.background = 'cyan';
        }
        element[element.length - 1 - i].style.background = 'green';
    }
}