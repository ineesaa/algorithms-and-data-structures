function bubbleSort(arr){
    for(let i = 0; i < arr.length - 1; ++i){
        let flag = false;
        for ( let j = 0; j < arr.length - 1 - i; ++j){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1], arr[j]];
                    flag = true;
            }
            
        }
        if(!flag) break;
    }
    
    return arr;
}
let arr = [7, 9, 2, 12, 3, 6, 4];
console.log(arr);
const res = bubbleSort(arr);
console.log(res);
 