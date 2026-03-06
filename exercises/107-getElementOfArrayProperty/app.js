function getElementOfArrayProperty(obj, key, index) {
    // your code here
    let arr = obj[key];
    let arr1;
    if (!arr || !Array.isArray(arr) || arr.length === 0){
        return undefined
    }else{
        arr1 = arr[index]
        return arr1
    }
        
}

let obj = {
    key: ['Jamil', 'Albrey']
};
let output = getElementOfArrayProperty(obj, 'key', 0); 
console.log(output); // --> 'Jamil'
