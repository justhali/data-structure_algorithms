function recursiveBinarySearch(list, target) {
    if (list.length === 0) {
        return false;
    } else {
        let mid = Math.floor(list.length / 2);
        if (list[mid] === target) {
            return true;
        } else {
            if (list[mid] < target) {
                return recursiveBinarySearch(list.slice(mid + 1), target);
            } else {
                return recursiveBinarySearch(list.slice(0, mid), target);
            }
        }
    }
}

function verify(result) {
    console.log("Target found", result);
}

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
result = recursiveBinarySearch(numbers, 4);
verify(result);
