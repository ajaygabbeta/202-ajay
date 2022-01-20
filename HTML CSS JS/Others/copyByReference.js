let fruits = ["Banana"];
let arr = fruits;  //copy by reference (Two varaibles refernce the same array)

console.log(arr == fruits); //true
arr.push("Pear"); //modify the array by reference
console.log(fruits);  //Banana, Pear  -Two items now.

//Loops
let arr1 = ["Pine", "Banana", "Pear"];

for(i=0; i<arr1.length;i++){
  console.log(arr1[i]);
}


//But for arrays there is another form of loops, for..of:
let fruitsss = ["Pine","Apple","Banana"];

//iterate over array elements
for(let fruit of fruitsss){
  console.log(fruit);
}