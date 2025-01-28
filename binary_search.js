function binarySearch(list, target) {
    // First element of the list
    let first = 0;
    // Last element of the list
    let last = list.length - 1;

    // Condition : while the first element is not greater than the last element
    while (first <= last) {
        // Find the middle element
        let midpoint = first + Math.floor((last - first) / 2);

        if (list[midpoint] === target) {
            return midpoint;
        }

        if (list[midpoint] < target) {
            first = midpoint + 1;
        } else {
            last = midpoint - 1;
        }
    }
    return -1;
}

function verify(index) {
    if (index != -1) {
        console.log("Target found at index ", index);
    } else {
        console.log("Target not found");
    }
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result = binarySearch(numbers, 3);
verify(result);


// O(log n) => logarithmic time
// While loop
