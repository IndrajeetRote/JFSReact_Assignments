function getArmstrongNumbers(start,end) {
    let armstrongArray = [];
    for (let i = start; i <= end; i++) {
        let numberOfDigits = i.toString().length;
        let sum = 0;
        let temp = i;
        while ( temp > 0) {
            let remainder = temp % 10;
            sum += remainder ** numberOfDigits;
            temp = parseInt( temp / 10) ;
        }
        if ( sum == i ) {
            armstrongArray.push(i) ;
        }
    }
        return armstrongArray;
}
    let getNextArmstrong = () => {
        let count = 0
        return {
            next: () => {
                let arr = getArmstrongNumbers( 100, 1000) ;
                return count < arr.length ?
                    { armstrong_value: arr[count++], done: false } :
                    { value: undefined, done: true }
            }
        }
    }
const armstrongIterator = getNextArmstrong();
console.log( armstrongIterator.next());
console.log( armstrongIterator.next());
console.log( armstrongIterator.next());