

let person1 = {
  firstName: "John",
  lastName: "Doe"
}

function buidProfile(someArgument, ...moreArguments) {
  return `${this.firstName} ${this.lastName} ${someArgument} ${moreArguments.join(" ")}`;
}

// let firstBind = buidProfile.bind(person1, "helloFirst", "helloSecond", "helloThird");
// console.log(firstBind());

Function.prototype.myBind = function(context, ...bindArgs) {
// Need 3 things:
// 1. The function to be bound. BuildProfile in our case.
// 2. The context to be used for the function example person1.
// 3. Any arguments to be passed to the function. customBind in this case.
//   return (...args) => {
//     this.apply(context, bindArgs.concat(args));
//   }
// }
  return (...callArgs) => {
    return this.apply(context, bindArgs.concat(callArgs));
  }
}

let customBind = buidProfile.myBind(person1, "helloFirst", "helloSecond", "helloThird");
console.log(customBind("helloFourth", "helloFifth"));

// Output:
// John Doe helloFirst helloSecond helloThird helloFourth helloFifth
