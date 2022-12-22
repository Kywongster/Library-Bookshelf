console.log(useVal1("hello world"));

// Scope: the area of code where you can access variable X would be considered "in the scope of X"

// const val1 = 'first variable';
// console.log(val1);

// if(typeof val1 === 'string') {
//     const val2 = 'second variable';
//     console.log(val1);

//     {
//         console.log(val2);
//     }
//     // console.log(`${val1} is a string`);
// }

// function exampleFunction() {
//     const val3 = 'third variable';
//     let val5 = 'variable 5';

//     if(true) {
//         {
//             const val4 = 'fourth variable';
//             val5 = 'the latest one';
//         }
//         // console.log(val4);
//     }

//     return val5;
// }
// console.log(val3);
// console.log(exampleFunction());
// console.log(window);

// Factory Functions
// use the "this" keyword
// returns objects (or technically any other data)
function createUser(username, email, emailOptIn) {
  return {
    username: username,
    email: email,
    emailOptIn: emailOptIn,
    sendEmail: function () {
      if (emailOptIn !== true) {
        return `Email DID NOT send: ${this.username} is not opted in!`;
      } else {
        return `Email to ${this.username} DID send!`;
      }
    },
  };
}
// const userFF1 = createUser('keiran', 'kk@fullstackacademy.com', true);
// console.log(userFF1);

function UserConstructor(username, email, emailOptIn) {
  console.log("1", this);
  this.username = username;
  console.log("2", this);
  this.email = email;
  console.log("3", this);
  this.emailOptIn = emailOptIn;
  console.log("final this", this);
  // implicitly returns an object (this)
}

UserConstructor.prototype.newFunction = function () {
  return true;
};

const userConstructor1 = new UserConstructor(
  "keiran",
  "kk@fullstackacademy.com",
  true
);
console.log("output", userConstructor1);

// Classes
// class vs prototype/constructor: syntactical sugar
// CLASSES IN JS ARE PROTOTYPES WITH A PAINT JOB

const arr = [
  { username: "keiran", email: "email@gmail.com", emailOptIn: true },
  { username: "keiran", email: "email@gmail.com", emailOptIn: true },
  { username: "keiran", email: "email@gmail.com", emailOptIn: true },
  { username: "keiran", email: "email@gmail.com", emailOptIn: true },
  { username: "keiran", email: "email@gmail.com", emailOptIn: true },
  { username: "keiran", email: "email@gmail.com", emailOptIn: true },
];

class UserClass {
  constructor(username, email, emailOptIn) {
    this.username = username;
    this.email = email;
    this.emailOptIn = emailOptIn;
  }

  newFunction(arr) {
    console.log(arr);
    return `${this.username}, ${this.email}`;
  }
}
// const userClass1 = new UserClass('keiran', 'kk@fullstackacademy.com', true);
// const userClass2 = new UserClass('luke', 'luke@fullstackacademy.com', false);
// console.log('output', userClass1);
// console.log('function', userClass1.newFunction());
// console.log('output', userClass2);
// console.log('function', userClass2.newFunction(arr));

// for(let i = 0; i < arr.length; i++) {
//     const user1 = new UserClass(arr[i].username, arr[i].email, arr[i].emailOptIn);
//     const user2 = new UserClass(arr[i]);
// }

// Inheritance for classes
// super - gets the property keys/values from the parent class
// extends - gets the methods from the parent class
class AdminClass extends UserClass {
  constructor(username, email, emailOptIn, level) {
    super(username, email, emailOptIn);
    this.level = level;
  }

  adminFunction() {
    return `I did a thing!`;
  }

  newFunction() {
    return `${this.username}, ${this.email}`;
  }
}
const admin1 = new AdminClass("username", null, true, 1);
console.log(admin1);
