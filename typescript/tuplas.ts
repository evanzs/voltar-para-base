let users: Array<string | number>; // aceita os dois tipos 

users = ['MAX',1]; // primeiro tipo de tupla hetero.
console.log(users)

users = [1,2]; //
console.log(users)



let usersTupla: [number , number]; // aceita os dois number apenas 

usersTupla = ['MAX',1]; // errado
console.log(usersTupla)

usersTupla = [1,2]; // certo
console.log(users)


usersTupla = [1,2,4]; // erro
console.log(usersTupla)
