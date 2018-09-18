fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {

      // is array
      if (collection.length !== undefined ){
        for (let i = 0; i < collection.length; i++){
          callback(collection[i], i, collection)
        }
      }
      // is object
      else {
        for (item in collection){
          callback(collection[item], item, collection)
        }
      }
      return collection
    },

    map: function(collection, callback) {
      let arr = []
      // is array
      if (collection.length !== undefined ){
        for (let i = 0; i < collection.length; i++){
          // debugger
          arr.push(callback(collection[i], i, collection))
        }
      }
      // is object
      else {
        for (item in collection){
          arr.push(callback(collection[item], item, collection))
        }
      }
      return arr
    },

    reduce: function(collection, callback, acc) {
      // debugger
      if (acc !== undefined){
        let result = acc
        for (let i = 0; i < collection.length; i++){
          result = callback(result, collection[i], collection)
          // acc = result
        }
        return result
      }
      else {
        let result = 0;
        for (let i = 0; i < collection.length; i++){
          result = callback(result, collection[i], collection)
          // acc = result
        }
        return result
      }


    },

    find: function(collection, predicate){
      for (item of collection){
        if (!!predicate(item)){
          return item;
        }
      }
    },

    filter: function(collection, predicate){
      let arr = [];
      for(item of collection){
        if (!!predicate(item)){
          arr.push(item);
        }
      }
      return arr;
    },

    size: function(collection){
      let counter = 0
      if (collection.keys !== undefined){
        for (item of collection){
          counter++;
        }
      }
      else{
        for(item in collection){
          counter++;
        }
      }
      return counter;
    },

    first: function(array, n){
      let count = 0;
      let arr = []
      if (n !== undefined){
        while (count < n){
          arr.push(array[count])
          count++
        }
      }
      else{
        return array[0]
      }
      return arr;
    },

    last: function(array, n){
      let index = array.length-n;
      let arr = []
      if (n !== undefined){
        while (index < array.length){
          arr.push(array[index])
          index++
        }
      }
      else{
        return array[array.length-1]
      }
      return arr;
    },

    compact: function(array){
      let arr = []
      for (element of array){
        if (!!element){
          arr.push(element);
        }
      }
      return arr;
    },

    sortBy: function(array, callback){
      let arr = array.slice();

      arr.sort(function(a,b){
        return callback(a) - callback(b)
      })
      return arr;
    },

    flatten: function(array, shallow){
         let copy = [...array];
         let result = [];
         if (shallow === true) {
           for (el of array) {
             if (typeof el === 'object') {
               for (element of el) {
                 result.push(element)
               }
             } else {
               result.push(el)
             }
           }
         } else {
           let count;
           while (count !== 0) {
             count = 0;
             result = [];
             for (el of copy) {
               if (typeof el === 'object') {
                 for (element of el) {
                   result.push(element)
                   count += 1
                 }
               } else {
                 result.push(el)
               }
             }
             copy = [...result];
           }
         }
         return result;
       },
    // bad code!
    // flatten: function(array, shallow){
    //   let result = [];
    //   if (shallow){
    //     for (element of array){
    //       if (typeof element === 'object'){
    //         for (el of element){
    //           result.push(el);
    //         }
    //       }
    //       else{
    //         result.push(element)
    //       }
    //     }
    //   }
    //   else{
    //     if (typeof array === 'object'){
    //       for (let i = 0; i < array.length; i++){
    //         debugger
    //         result = result.concat(fi.flatten(array[i]))
    //         // result.concat(fi.flatten(array[i]))
    //       }
    //     }
    //     else{
    //       result.push(array)
    //     }
    //   }
    //   return result
    // },

    uniq: function(array, isSorted, callback){
      result =  []
      callbackResult = []
      if (callback !== undefined){
        for (element of array){
          if (callbackResult.indexOf(callback(element)) === -1){
            result.push(element)
            callbackResult.push(callback(element))
          }
        }
      }
      else{
        for (element of array){
          if (result.indexOf(element) === -1){
            result.push(element)
          }
        }
      }
      return result
    },

    keys: function(object){
      let result = [];
      for (key in object){
        result.push(key);
      }
      return result;
    },

    values: function(object){
      let result = [];
      for (key in object){
        result.push(object[key]);
      }
      return result;
    },

    functions: function(object) {
      let result = []
      for (key in object){
        if (typeof object[key] === 'function'){
          result.push(key)
        }
      }
      result.sort();
      return result;
    },

    // giveMeMore: function(){
    //   return true
    // },


  }
})()

fi.libraryMethod()
