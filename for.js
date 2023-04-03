//Example 1:
 function geeks() {
    console.log('for(;;)')
    for (let i = 0; i < 10; i+=2) {
        console.log(i + '')
    }
}
geeks()
//Example 2:
console.log('for...of')
for (let i of ['HA NOI',3.4,2023]) {
    console.log(i + ' ')
}
//Example 3:
let obj = {
    name : 'viet',
    age : 29,
    salary : 10000
}
console.log('for...in')
for (let i in obj){
    console.log(obj[i] + ' ')
}