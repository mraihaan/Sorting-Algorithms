// SELECTION SORT
function selectionSort(arr){
    for(var i=0; i<arr.length-1; i++){
        var currentMin = i;
        for (var j = i+1; j < arr.length; j++) {
            if(arr[currentMin] > arr[j]){
                currentMin = j;
            }
        }
        var temp = arr[currentMin];
        arr[currentMin] = arr[i];
        arr[i] = temp;
    }
    return arr;
}


// INSERTION SORT
function insertionSort(arr){
    for(var a=1; a<arr.length; a++){
        var left=1;
        var right=0;
        if(arr[a-left] > arr[a]){
            while(a-left>=0){
                if(arr[a-left] > arr[a-right]){
                    var temp = arr[a-left];
                    arr[a-left] = arr[a-right];
                    arr[a-right] = temp;
                }
                left++;
                right++; 
            }
        }
    }
    return arr;
}
