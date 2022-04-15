let message; // type any 
message = 'abc' //any
let endWithC = (<string>message).endsWith('c'); // tells the transpiller the type of a variable
let alternativeWay = (message as string).endsWith('c');
