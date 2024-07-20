const obj = {
    property1: 'value1',
    property2: 'value2',
    method1() {
        console.log('This is method 1');
    },
    method2() {
        console.log('This is method 2');
    }
};

console.log(obj);


/*
Output:

{
  property1: 'value1',
  property2: 'value2',
  method1: [Function: method1],
  method2: [Function: method2]
}
  
*/