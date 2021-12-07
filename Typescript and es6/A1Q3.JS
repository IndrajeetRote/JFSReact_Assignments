let Order={
    id:456,
    title:'Assignment',
    price:300,
    printOrder(){
        return this.id +" "+ this.title;
    },
    getPrice(){
        return this.price;
    }
};
//let copiedObj=Object.assign({},Order);