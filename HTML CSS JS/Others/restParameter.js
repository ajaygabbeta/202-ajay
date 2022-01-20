//the third argument, mannyMoreArgs, will be an array that contains
//the 3rd, 4th, 5th, 6th  ...nth -as many arguments that the user includes.
function myFun(a,b,c, ...manyMoreArgs){
  console.log("a", a);
  console.log("b", b);
  console.log("c", c);
  console.log("manyMoreArgs", manyMoreArgs)
}
myFun("one","two","three","four","five","six")