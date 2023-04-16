//1-Calculate the Square of a Number.

let nume
nume=Math.pow(3,2);
console.log(nume);

//-Calculate Square-root of a Number.
let xy= prompt("enter any number for square-root")
let numbes=Math.sqrt(xy);
console.log(numbers);

//3-copy-all-elements-from-an-array-to-another-array.
let a=[1,12,13,14]
let b=a;
console.log(b)

//4-maximum-and-minimum-between-two-numbers-using-functions.
console.log("maximum number");
let nu=Math.max(15,25);
console.log(nu);
console.log("minimum number");
let number=Math.min(15,25);
console.log(number);

//5-count-total-number-of-negative-elements-in-an-array
let nm=[1,-2,-4,6 ,7,-9]
number=nm.length;
let ck=0;
for(let i=0;i<number;i++){
  if(nm[i]<0){

    ck++;
  }
}
console.log(ck ," negtive numbers")

//6-sum of all even numbers between 1 to n, n is taken from the user. 
let array=new Array();
let num=prompt("Enter numbers");
num=Number.parseInt(num)
let sum=0;
for(let i=1;i<=num;i++){
  if(i %2==0){
     sum=sum+i;
  } 
}
 console.log( sum)

//7-count total number of duplicate elements in an array.
let x = [1,2,2,3,4,4];

let elementCounts = {};

x.forEach(element => {
  elementCounts[element] = (elementCounts[element]||0 ) +1;
});

console.log(elementCounts);