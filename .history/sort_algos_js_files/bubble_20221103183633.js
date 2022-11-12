function bubbleSort() {
    console.log('bubble sort clicked');

    const element = document.querySelectorAll('.bar');

    for (let i = 0; i < element.length - 1; i++) {
        console.log("In first i loop");
        for (j = 0; j < n - i - 1; j++) {
            console.log("In j loop");
            element[j].style.background = 'blue';
            element[j+1].style.background = 'blue';

            if (element[j].style.height > element[j + 1].style.height) {
                console.log("In j loop");
                swap(element[j], element[j] + 1);
            }
        }
    }
}