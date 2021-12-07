let array = [10,20,30,40];
let [ele1, ele2, ele3, ele4] = array;
console.log("3rd element: ",ele3);
console.log("****************************************************");

//7.b
let organization = {
    nameObj: "Capgemini",
    address: { country: "France", pincode: 25815}
}
let {nameObj, address: a} = organization;
console.log("deep match destructured pincode: ",a.pincode);
console.log("*****************************************************");