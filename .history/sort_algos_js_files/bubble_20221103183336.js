function bubbleSort() {
    console.log('bubble sort clicked');

    const element = document.querySelectorAll('.bar');

    for (let i = 0; i < element.length-1; i++) {
        console.log("In first i loop");
        for (j = 0; j < n-i-1; j++){
            console.log("In j loop");
            if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
         
        }
        }
    }
}