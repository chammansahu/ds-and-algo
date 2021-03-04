//uses objects or sets to collect values/frquencies of values
//often avoid nested loop or O(n^2) operation  with rrays/strings

const same=(arr1,arr2)=>{
   if(arr1.length!=arr2.length){
       return false;
   }
   else{
       for(let i in arr1){
           let correctIndex=arr2.indexOf(arr1[i]**2);
           if(correctIndex===-1){
              return false
           }
           
       }
   }
   return true;
} 
console.log(same([1,2,3,4],[1,4,9,16]))