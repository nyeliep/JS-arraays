
// Find the last element of the following arrays.
// arr1 = [3,7,34,90,12]
// arr2 = [true, "green", "where",12,56]
   let arr1 = [3,7,34,90,12];
   let lastElement1 = arr1.slice(-1);
   console.log(lastElement1);

   let arr2 = [true,"green","where",12,56]
   let lastElement2 = arr2.slice(-1)
   console.log(lastElement2);


// Write a JS program that will join the following array elements into a string
// myPets = ["Cow", "Bird", "Snake", "Dog"];
  const myPets = ["Cow","Bird","Snake","Dog"];
  const pets = myPets.toString();
  console.log(pets)

// Write a JS script to sort the following array items
// var arr3 = [ -5, 9, 5, 3, 2, -3, 6, 8, 4, 1 ];
 var arr3 = [-5,9,5,3,2,-3,6,8,4,1]; 
 var  arr = arr3.sort()
 console.log(arr)


// Write a program to remove duplicates from the following array.
// Console the array without duplicates, and console another array that only contains the duplicates
// var arr = ["apple", "mango", "apple",
            // "orange", "mango", "mango"];

            var arr = ["apple","mango","apple","orange","mango","mango"];
            let singleArr = arr.filter((orange,index)=>{
              return arr.indexOf(orange) === index;
            
            });
            console.log(singleArr);

            var arr = ["apple","mango","apple","orange","mango","mango"];
            let dupArr = arr.filter((orange,index)=>{
              return arr.indexOf(orange) !== index;
            
            });

            console.log(dupArr);




// Write a JS script to search for the following word in the array.
// "way"
// If the word is present, console it else console "the search word was not found"
// let arr5 = ["the", "way", "x", 4];
let arr5 = ["the", "way", "x", 4];
let word = "way"
 if (word=="way"){
  console.log(word)
 }else{
  console.log("the search word was not found")
 }



// Write a JS script to sort the following string
// let word = "sevink"


let string = "sevink"
console.log(string.split('').sort().join(''));




 