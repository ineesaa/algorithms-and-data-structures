function selectionSort(arr){
    for (let i = 0; i < arr.length - 1; ++i){
        let min = i;
        for(let j = i + 1; j < arr.length; ++j){
            if(arr[min] > arr[j]){
                min = j;
            }
           
        }
        if(min !== i){
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }

    }
    return arr
}

const arr = [5, 0, 6, 7, 3];
console.log(arr);
const res = selectionSort(arr);
console.log(res)