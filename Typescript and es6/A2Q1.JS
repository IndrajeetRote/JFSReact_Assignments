const PreviousNo = Symbol('previousNo') ;  
const CurrentNo = Symbol('currentNo') ;  
class FibonacciSeries{  
   constructor( previousNo, currentNo) {  
     this [PreviousNo] = previousNo ;  
     this [CurrentNo] = currentNo;   
   }  
   next (num) {  
     let NextTerm 	  = 0 ;   
     for(let i = 0 ; i  < num ; i++) {  
       NextTerm= this[PreviousNo] +this [CurrentNo] ;  
       this [PreviousNo] =this [CurrentNo] ;  
       this [CurrentNo]= NextTerm;   
     }
     return this[CurrentNo] ;  
   }  
}  
let fibo = new FibonacciSeries( 0 , 1) ;  
console.log(fibo.next(100)) ;