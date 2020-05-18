const array = ['apple', 'pear', 'bananas', 'watermelon', 'mango', 'pear', 'apple', 'bananas', 'pear', 'strawberry', 'pineapple'];
function changeToObject(array) {
     let object = {};
     for(let key of array){
         object[key] = key.length;
     }
     return object;
}
console.log(changeToObject(array));