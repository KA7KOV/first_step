// 1. **Удвоение**
    
//     На вход функции подается массив [4, 7, 3, 1, 9, 0,  2, 8, 5, 6], нужно вывести этот массив, но каждый элемент  умножен на 2, то есть: [8, 14, 6, 2, 18, 0, 4, 16, 10, 12]
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const double = (arr) => {
    const resultArray = []
    for (let i = 0; i < arr.length; i++) {
        resultArray.push(arr[i] * 2)
    }
    return resultArray
}

let array = [4, 7, 3, 1, 9, 0, 2, 8, 5, 6]
console.log(double(array))