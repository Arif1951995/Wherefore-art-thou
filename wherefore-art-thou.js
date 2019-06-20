function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    let sourceKeys = Object.keys(source);
    let sourceValues = Object.values(source);
    // Only change code below this line
    for(let i = 0; i < collection.length; i++) {
      let objeKeys = Object.keys(collection[i]);
      let objeValues = Object.values(collection[i]);
              let count = 0;
              let count2  = 0;
        for(let  n = 0; n < sourceKeys.length; n++) {
             console.log(objeKeys, sourceKeys[n])
                count2++;
                
            if(objeKeys.includes(sourceKeys[n]) && objeValues.includes(sourceValues[n])) {
                count++;
            }
        } 
        console.log(count2, objeKeys)

          if(count === sourceKeys.length) {
              arr.push(collection[i]);
          }
         }
    
    
    
    // Only change code above this line

    return  arr
   }
  
  
  whatIsInAName([{"a": 1, "b": 2, "c": 3}], {"a": 1, "b": 9999, "c": 3});
