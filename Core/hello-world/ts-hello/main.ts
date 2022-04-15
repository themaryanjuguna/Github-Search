//arrow functions

let log = function(message){
    console.log(message);
}

//vs
let doLog = (message) => {
    console.log(message);
}

//also
let doLog = (message) => console.log(message);
let doLog = message => console.log(message);
let doLog = () => console.log();