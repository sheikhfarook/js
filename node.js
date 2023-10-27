function findmissing(arr,N) {
    var i;
    var arrmiss = [];
    for (var i =0; i <= N; i++){
        arrmiss[i] = 0;
    }

    for( var i = 0; i < N; i ++){
        arrmiss[arr[i] - 1] = 1;
    }

    var ans = 0;
    for (var i = 0; i <=N; i++){
        if (arrmiss[i] == 0)
        ans = i + 1;
    }
    console.log(ans);
}

var arr = [1,2,3,4,6,7,8]
var n = arr.length;
findmissing(arr,n);



// var arr =[1,2,3,4,6,3,6,1]
// function printArray(arr) {
//     var sum = 0
//     for(var i = 1; i <= arr.lenght; i++){
//         sum = sum + arr[i]
//     }
//     return sum
// }
// var arr = [322,34,56,7]
// console.log(printArray(arr))

// var arr = [13,23,12,45,22,48,66,100]
// even(arr)
// function even(arr) {
//     for(var i = 0; i< arr.length; i++){
//         if (arr[i] % 2 == 0){
//             console.log(arr[i])
//         }
//     }
    
// }