    //FIRST POINT

// let firstPrompt = prompt("Enter your first number");
// let secondPrompt = prompt("Enter your last number");

// if (firstPrompt > secondPrompt) {
//   console.log(firstPrompt);
// } else if (secondPrompt > firstPrompt) {
//   console.log(secondPrompt);
// } else {
//   console.log("you writed equal numbers");
// }



//SECOND POINT


// let number = prompt("Enter a number:");

// if (number > 0) {
//   alert("The number have plus sign.");
// } else if (number < 0) {
//   alert("The number have minus sign");
// } else {
//   alert("you entered wrong number");
// }



//THIRD POINT

// let firstNumber = prompt("Enter first number:");
// let secondNumber = prompt("Enter second number:");
// let thirdNumber = prompt("Enter third number:");
// let forthNumber = prompt("Enter fourth number:");
// let fifthNumber = prompt("Enter fifth number:");

// let largest = firstNumber;

// if (secondNumber > largest) {
//   largest = secondNumber;
// }
// if (thirdNumber > largest) {
//   largest = thirdNumber;
// }
// if (forthNumber > largest) {
//   largest = forthNumber;
// }
// if (fifthNumber > largest) {
//   largest = fifthNumber;
// } else {
//     console.log("you have typed same numbers")
// }

// console.log("The largest number is " + largest);



// for (let i = 0; i <= 15; i++) {
//     if (i % 2 === 0) {
//       console.log(i + " is even");
//     } else {
//       console.log(i + " is odd");
//     }
//   }
  




// for (let i = 1; i <= 100; i++) {
//     // Check if the number is a multiple of 3 and 5
//     if (i % 3 === 0 && i % 5 === 0) {
//       console.log("FizzBuzz");
//     } 
//     // Check if the number is a multiple of 3
//     else if (i % 3 === 0) {
//       console.log("Fizz");
//     } 
//     // Check if the number is a multiple of 5
//     else if (i % 5 === 0) {
//       console.log("Buzz");
//     } 
//     // If none of the above conditions are true, print the number
//     else {
//       console.log(i);
//     }
//   }
  



// for (let i = 1; i <= 5; i++) {
//     let row = "";
//     for (let j = 1; j <= i; j++) {
//       row += "*";
//     }
//     console.log(row);
//   }
  











const marks = [];
for (let i = 1; i <= 1; i++) {
  marks.push(parseInt(prompt(`Enter the mark for student ${i}:`)));
}
const sum = marks.reduce((acc, curr) => acc + curr, 0);
const average = sum / marks.length;

let grade;
if (average < 30) {
  grade = "F";
} else if (average < 40) {
  grade = " E";
} else if (average < 50) {
  grade = "D";
} else if (average < 60) {
  grade = "C"; 
}else if (average < 70) {
    grade = "B";
}else if (average < 80) {
    grade = "A";
}else if (average < 90) {
    grade = "A+";
}else {
  grade = "A";
}

alert(`Average marks: ${average.toFixed(2)}\nGrade: ${grade}`);


