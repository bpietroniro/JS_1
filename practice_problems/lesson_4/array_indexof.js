// uses "sentinel" linear search
function indexOf(arr, val) {
    arr[arr.length] = val;

    let i = 0;
    while (arr[i] !== val) {
        i++;
    }

    if (i === arr.length - 1) i = -1;
    arr.length -= 1;
    return i;
}
