// Create a simple counter using setInterval function.
let counter =0;
console.log("Starting counter");
const interval= setInterval(()=> {
    counter++;

if (counter == 10){
    clearInterval(interval);
    console.log("Counter stopped after 10 seconds");
}
},1000);