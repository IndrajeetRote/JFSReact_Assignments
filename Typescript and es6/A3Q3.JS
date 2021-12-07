interface Printable {
    name: string,
    printAll: (string:string) => string
}
var circle: Printable = {
    name: " ron",
    printAll: (str) => { return "hi" + str }
}
var employee: Printable = {
    name: " Harry ",
    printAll: (str) => { return "hello" + str }
}
console.log(circle.printAll(circle.name))
console.log(employee.printAll(employee.name))