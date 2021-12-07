class Object1{
    name1;
    length1;
    constructor(name1:string){
        this.name1 = name1;
        this.length1 = name1.length;
    }
}

let displayArray = (...objects: Array<object>) =>{
    for(let i in objects)
    console.log(objects[i]);
}

let names = ['john','snow','ned','stark'];
let [name1, name2, name3,name4] = names;
const obj1 = new Object1(name1);
const obj2 = new Object1(name2);
const obj3 = new Object1(name3);
const obj4 = new Object1(name4);
displayArray(obj1,obj2,obj3,obj4);
let arr=[]
