var add = () => 21; 

//5.b 
function userFriends(username: string, ...friends: Array<string>){
    console.log("username: ",username);
    console.log("friends: ",friends);
}

userFriends('Tony Stark','Natasha','Thor','Steve Rogers','Hulk','grute');
console.log("***********************************************************");

//5.c
function capitals(...names: Array<string>){
    console.log();
    for(let i in names)
        console.log(names[i].toUpperCase());
}

capitals('Tony Stark','Natasha','Thor','Steve Rogers','Hulk','grute');
console.log("***********************************************************");