const count = (num) => {
   if(num<=0){
       console.log("all Done!!!")
       return 
      
   }
  
  
     console.log(num)
     num--;
    return count(num)
      

}
console.log(count(10))