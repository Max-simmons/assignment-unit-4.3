console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!! 

let basket = [];

function addItem(item){
    console.log('in addItems', item);
    basket.push(item);
    return true;
}

console.log('basket is empty')
addItem('ice')
addItem('seeds')
console.log(`basket = ${basket}`)

function listItems(){
    for(let i=0; i< basket.length; i++){
        console.log(basket[i])
    }     
}

console.log('items in the basket')
listItems();
console.log(`basket = ${basket}`)

function 


