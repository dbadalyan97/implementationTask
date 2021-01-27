// //map method
//
// const map = (arr, callBack) => {
//     let newArr = [];
//     for (let i = 0; i < arr.length; i++) {
//         newArr[i] = callBack(arr[i]);
//     }
//     return newArr;
// }
//
//
// console.log(map([1, 2, 3, 4], function (elem) {
//     elem += 1
//     return elem
// }))


//forEach method
// let sum = 0;
// const forEach = (arr, callBack) => {
//     for (let i = 0; i < arr.length; i++) {
//         callBack(arr[i]);
//     }
// }
//
//
//forEach([1, 2, 3], function (elem) {
//     sum += elem;
// }))
//
// console.log(sum)


//every method
//
// const every = (arr, callBack) => {
//     for (let i = 0; i < arr.length; i++) {
//         if (!callBack(arr[i])) return false;
//     }
//     return true;
// }
//
//
// console.log(every([1, 2, 3, 4], function (elem) {
//     return elem <0
// }))


//filter method

// const filter = (arr, callBack) => {
//     let filteredArr = []
//     for (let i = 0; i < arr.length; i++) {
//         if (callBack(arr[i])) filteredArr.push(arr[i]);
//     }
//     return filteredArr;
// }
//
// console.log(filter([1, 2, 3], function (elem) {
//     return elem < 2;
// }))

//
// const reduce = (arr, callBack, accum) => {
//     for (let i = 0; i < arr.length; i++) {
//         accum = callBack(accum, arr[i]);
//     }
//     return accum;
// }
//
// console.log(reduce([1, 2, 3, 4, 5], (acc, elem) => elem * acc, 1));