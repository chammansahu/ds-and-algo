//uses objects or sets to collect values/frquencies of values
//often avoid nested loop or O(n^2) operation  with rrays/strings
//refactor frequecy counter

const same=(arr1,arr2)=>{
   if(arr1.length!=arr2.length){
       return false;
   }
   let freCounter1={},freCounter2={};
   for (const i of arr1) {
       freCounter1[i]=(freCounter1[i]||0)+1;
   }
   for (const j of arr2) {
    freCounter2[j]=(freCounter2[j]||0)+1;
   }
   for (const key in freCounter1) {
       if (!(key**2 in freCounter2)) {
           return false
           
       }
       if (freCounter2[key**2]!=freCounter1[key]) {
          return false; 
       }
   }
   
   return true;
} 
console.log(same([1,2,3,4],[1,4,9,16]))